import { db } from '@/app/lib/db';
import { projects } from '@/app/db/schema';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 
  const userList = await db.select().from(projects);
  return NextResponse.json( userList );
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json( {
    success: true,
    data: body
  });
}