import connectMongoDB from "@app/libs/mongodb";
import Organization from "@app/models/organization";
import User from "@app/models/user";
import { NextResponse } from "next/server";
import { type NextRequest } from 'next/server'

export async function POST(request: Request) {
    const { userId, name, users } = await request.json();
    await connectMongoDB();
    const organization = await Organization.create({ name, users });
    console.log('organization', organization)
    const user = await User.findByIdAndUpdate(userId, {organization: organization._id});
    console.log('user', user)
    return NextResponse.json({ message: "Organization Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const organizations = await Organization.find();
    return NextResponse.json({ organizations });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Organization.findByIdAndDelete(id);
    return NextResponse.json({ message: "Organization Deleted" }, { status: 200 })
}