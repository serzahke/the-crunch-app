import connectMongoDB from "@app/libs/mongodb";
import User from "@app/models/user";
import { NextResponse } from "next/server";

export async function POST(request : Request) {
  try {
    await connectMongoDB();
    const { email } = await request.json();
    const user = await User.findOne({ email }).select("_id");
    console.log("user: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}