import connectMongoDB from "@app/libs/mongodb";
import User from "@app/models/user";
import { NextResponse } from "next/server";
var bcrypt = require('bcryptjs');

export async function POST(request : Request) {
  try {
    const { username, email, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ username, email, password: hashedPassword });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}