import { db } from '@/app/lib/db';
import { languages } from '@/app/db/schema';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 
  const data = await db.select().from(languages);
  const dictionaries: any = {};
  data.map(item => {
     dictionaries[item.id] = JSON.parse(item.data);
  });
  return NextResponse.json({dictionaries});

}