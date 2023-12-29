import connectMongoDB from "@app/libs/mongodb";
import Category from "@app/models/category";
import { NextResponse } from "next/server";
import { type NextRequest } from 'next/server'

export async function POST(request: Request) {
    const { value, label } = await request.json();
    await connectMongoDB();
    await Category.create({ value, label });
    return NextResponse.json({ message: "Category Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const categories = await Category.find();
    return NextResponse.json({ categories });
}

export async function DELETE(request : NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Category.findByIdAndDelete(id);
    return NextResponse.json({ message: "Category Deleted"}, { status: 200})
}