import connectMongoDB from "@app/libs/mongodb";
import Task from "@app/models/task";
import { NextApiRequest } from "next";
import { NextURL } from "next/dist/server/web/next-url";
import { NextResponse } from "next/server";

export async function POST(request: NextApiRequest) {
    const { title, description, status, reporter, assigned, category, confirmedByOwner } = await request.json();
    await connectMongoDB();
    await Task.create({ title, description, status, reporter, assigned, category, confirmedByOwner });
    return NextResponse.json({ message: "Task Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const tasks = await Task.find();
    return NextResponse.json({ tasks });
}

export async function DELETE(request : Request) {
    NextURL
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Task.findByIdAndDelete(id);
    return NextResponse.json({ message: "Task Deleted"}, { status: 200})
}