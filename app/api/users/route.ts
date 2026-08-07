import { db } from '@/app/lib/db';
import { users } from '@/app/db/schema';
import { NextResponse, NextRequest } from 'next/server'
import bcrypt from "bcryptjs";

export async function GET(request: Request) { 
  
  const projectsList = await db.select().from(users);
  return NextResponse.json( {
    success: true,
    data:projectsList
  });
}

