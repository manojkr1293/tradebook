import { journalSchema } from "@/app/lib/journalModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
 await mongoose.connect(process.env.MONGODB_URI);
 const journalData = await journalSchema.find();
 return NextResponse.json({result:journalData})
}
export async function POST(request){
  let payload = await request.json();
  let result;
  let success = false;
  await mongoose.connect(process.env.MONGODB_URI);
  const journals = new journalSchema(payload);
  result = await journals.save();
  if(result){
    success=true
  }

  return NextResponse.json({result,success});
}