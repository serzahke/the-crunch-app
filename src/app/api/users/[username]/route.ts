import connectMongoDB from "@app/libs/mongodb";
import User from "@app/models/user";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// export async function PUT(request: Request, { params } : any) {
//     const id = new ObjectId(params);
//     const {
//         newTitle: title,
//         newDescription: description,
//         newStatus: status,
//         newReporter: reporter,
//         newAssigned: assigned,
//         newCategory: category,
//         newConfirmedByOwner: confirmedByOwner,
//     } : any = await request.json();
//     await connectMongoDB();
//     await Task.findByIdAndUpdate(id, { title, description, status, reporter, assigned, category, confirmedByOwner });
//     return NextResponse.json({ message: "Task Updated" }, { status: 200 })
// }

export async function GET(request: Request, { params }: any) {
    await connectMongoDB();
    const user = await User.findOne({ "username": params.username});
    return NextResponse.json({ user }, { status: 200 });
}