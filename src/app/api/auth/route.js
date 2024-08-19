import { authSchema } from "@/app/lib/authModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
  await mongoose.connect(process.env.MONGODB_URI);
  let authData = await authSchema.find();
  return NextResponse.json({result:authData});
}

export async function POST(request){
  let payload = await request.json();
  let result;
  let success = false;
  await mongoose.connect(process.env.MONGODB_URI);
  
  if(payload.isLogin){
    result = await authSchema.findOne({email:payload.username,password:payload.password});
    if(result){
      success= true
    }
  }else{
    const authData = new authSchema(payload);
    result = await authData.save();
    if(result){
      success = true;
    }
  }

  return NextResponse.json({result,success});
}
