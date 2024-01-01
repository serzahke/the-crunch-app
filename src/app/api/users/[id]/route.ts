import connectMongoDB from "@app/libs/mongodb";
import Organization from "@app/models/organization";
import User from "@app/models/user";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
var bcrypt = require('bcryptjs');

export async function PUT(request: Request, { params }: any) {
    try {
        const id = new ObjectId(params);
        const {
            newUsername: username,
            newEmail: email,
            newPassword: password,
            newOrganization: organization,
            newAvatar: avatar,
        }: any = await request.json();
        // const hashedPassword = await bcrypt.hash(password, 10);
        await connectMongoDB();
        const user = await User.findByIdAndUpdate(id, { username, email, password, organization, avatar });
        console.log('user', user)
        return NextResponse.json({ message: "User Updated" }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred while updating the user." },
            { status: 500 }
        );
    }
}

export async function GET(request: Request, { params} : any) {
    const id = new ObjectId(params);
    await connectMongoDB();
    const user = await User.findOne({ _id: id  }).populate({path: "organization", model: Organization});
    return NextResponse.json({ user }, {status: 200});
}