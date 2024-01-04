import connectMongoDB from "@/libs/mongodb";
import InvitedUser from "@/models/invitedUser";
import { NextRequest, NextResponse } from "next/server";
import emailer from "./emailer";

export async function POST(request: Request) {
    const { email, invitedBy, organization } = await request.json();
    await connectMongoDB();
    await InvitedUser.create({ email, invitedBy, organization });
    await emailer({ invitedBy, email })
    return NextResponse.json({ message: "Invited User Created" }, { status: 201 });
}

export async function GET(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    const invitedUsers = await InvitedUser.find({invitedBy: id})
    return NextResponse.json({ invitedUsers });
}

// export async function DELETE(request : NextRequest) {
//     const id = request.nextUrl.searchParams.get("id");
//     await connectMongoDB();
//     await User.findByIdAndDelete(id);
//     return NextResponse.json({ message: "User Deleted"}, { status: 200})
// }