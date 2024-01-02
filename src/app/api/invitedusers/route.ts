import connectMongoDB from "@app/libs/mongodb";
import InvitedUser from "@app/models/invitedUser";
import { NextResponse } from "next/server";
import emailer from "./emailer";


export async function POST(request: Request) {
    const { invitedBy, email } = await request.json();
    await connectMongoDB();
    await InvitedUser.create({ invitedBy, email });
    await emailer({ invitedBy, email })
    return NextResponse.json({ message: "Invited User Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const invitedUsers = await InvitedUser.find();
    return NextResponse.json({ invitedUsers });
}

// export async function DELETE(request : NextRequest) {
//     const id = request.nextUrl.searchParams.get("id");
//     await connectMongoDB();
//     await User.findByIdAndDelete(id);
//     return NextResponse.json({ message: "User Deleted"}, { status: 200})
// }