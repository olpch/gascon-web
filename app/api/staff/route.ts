import { db } from '@/app/lib/db';
import { staff } from '@/app/db/schema';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

  // const usersList = await db.insert(users).values({
  //   email: "olee@test.com",
  //   pwd: "hashedPassword",
  // });
   
  const staffList = await db.select().from(staff);

  return NextResponse.json( staffList );
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json( {
    success: true,
    data: body
  } );
 }