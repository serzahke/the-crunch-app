import connectMongoDB from "@app/libs/mongodb";
import User from "@app/models/user";
import { NextResponse } from "next/server";
import { type NextRequest } from 'next/server'

export async function POST(request: Request) {
    const { username, email, password } = await request.json();
    await connectMongoDB();
    await User.create({ username, email, password });
    return NextResponse.json({ message: "User Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    // const users = await User.find();
    const users = await User.find().select(["username", "email"]);
    return NextResponse.json({ users });
}

export async function DELETE(request : NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await User.findByIdAndDelete(id);
    return NextResponse.json({ message: "User Deleted"}, { status: 200})
}