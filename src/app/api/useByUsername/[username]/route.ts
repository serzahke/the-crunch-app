import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

// Rename the dynamic path to work email service

export async function GET(request: Request, { params }: any) {
    await connectMongoDB();
    const user = await User.findOne({ "username": params.username});
    return NextResponse.json({ user }, { status: 200 });
}