import connectMongoDB from "@/libs/mongodb";
import Status from "@/models/status";
import { NextResponse } from "next/server";
import { type NextRequest } from 'next/server'

export async function POST(request: Request) {
    const { value, label } = await request.json();
    await connectMongoDB();
    await Status.create({ value, label });
    return NextResponse.json({ message: "Status Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const statuses = await Status.find();
    return NextResponse.json({ statuses });
}

export async function DELETE(request : NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Status.findByIdAndDelete(id);
    return NextResponse.json({ message: "Status Deleted"}, { status: 200})
}