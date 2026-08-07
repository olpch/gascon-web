import { db } from '@/app/lib/db';
import { users } from '@/app/db/schema';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

  // const usersList = await db.insert(users).values({
  //   email: "olee@test.com",
  //   pwd: "hashedPassword",
  // });
   
  const usersList = await db.select().from(users);

  return NextResponse.json( usersList );
}