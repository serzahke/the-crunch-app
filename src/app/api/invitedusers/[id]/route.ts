import connectMongoDB from "@/libs/mongodb";
import Category from "@/models/category";
import InvitedUser from "@/models/invitedUser";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// export async function PUT(request: Request, { params } : any) {
//     const id = new ObjectId(params);
//     const {
//         newLabel: label,
//         newValue: value,
//     } : any = await request.json();
//     await connectMongoDB();
//     await Category
//     .findByIdAndUpdate(id, { label, value });
//     return NextResponse.json({ message: "Category Updated" }, { status: 200 })
// }

export async function GET(request: Request, { params} : any) {
    const id = new ObjectId(params);
    await connectMongoDB();
    const usersInvitedBy = await InvitedUser.find({ invitedBy: id })
    console.log('usersInvitedBy', usersInvitedBy)
    return NextResponse.json({ usersInvitedBy }, {status: 200});
}