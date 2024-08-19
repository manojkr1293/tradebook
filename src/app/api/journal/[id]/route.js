import { journalSchema } from "@/app/lib/journalModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request,content){
  let id = content.params.id;
  await mongoose.connect(process.env.MONGODB_URI);
  let success = false;
  let result = await journalSchema.find({user_id:id});
  if(result){
    success = true;
  }

  return NextResponse.json({result,success})
 }