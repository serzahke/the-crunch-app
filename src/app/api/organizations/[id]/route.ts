import connectMongoDB from "@app/libs/mongodb";
import Organization from "@app/models/organization";
import User from "@app/models/user";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PUT(request: Request, { params }: any) {
    const id = new ObjectId(params);
    const {
        newName: name,
    }: any = await request.json();
    await connectMongoDB();
    await Organization.findByIdAndUpdate(id, { name });
    return NextResponse.json({ message: "Organization Updated" }, { status: 200 })
}

export async function GET(request: Request, { params }: any) {
    const id = new ObjectId(params);
    await connectMongoDB();
    const organization = await Organization.findOne({ _id: id }).populate({path:"users", model: User})
    return NextResponse.json({ organization }, { status: 200 });
}