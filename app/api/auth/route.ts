import { NextRequest, NextResponse } from "next/server";
import { db } from '@/app/lib/db';
import { users } from "@/app/db/schema";
import { UserAuth } from "@/app/lib/models";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { createToken } from "@/app/lib/tokens";


export async function POST(request: NextRequest) {
  try {
    const { email, pwd } = await request.json();

    if (!email || !pwd) {
      return NextResponse.json(
        {
          success: false,
          message: "Email y contraseña son requeridos",
        },
        { status: 400 }
      );
    }

    const user = await loginUser({
      email,
      pwd,
    });

    const token = await createToken({
        userId: user.id,
        email: user.email,
        role: user.role
    });

    return NextResponse.json({
      ...user,
      token,
      pwd: "**********"      
    });

  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "INVALID_CREDENTIALS"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Credenciales inválidas",
        },
        { status: 401 }
      );
    }

    console.error("LOGIN_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Error interno del servidor",
      },
      { status: 500 }
    );
  }
}


async function loginUser({ email, pwd }: UserAuth) {
    const user = await (
      await db.select()
          .from(users)
          .where(
              eq(users.email, email.toLowerCase())
          ))[0];
    if (!user) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const validPassword = await bcrypt.compare(pwd, user.pwd);

  if (!validPassword) {
    throw new Error("INVALID_CREDENTIALS");
  }

  return user;
}