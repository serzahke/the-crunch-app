import connectMongoDB from "@app/libs/mongodb";
import Category from "@app/models/category";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PUT(request: Request, { params } : any) {
    const id = new ObjectId(params);
    const {
        newLabel: label,
        newValue: value,
    } : any = await request.json();
    await connectMongoDB();
    await Category
    .findByIdAndUpdate(id, { label, value });
    return NextResponse.json({ message: "Category Updated" }, { status: 200 })
}

export async function GET(request: Request, { params} : any) {
    const id = new ObjectId(params);
    await connectMongoDB();
    const category = await Category.findOne({ _id: id  });
    return NextResponse.json({ category }, {status: 200});
}