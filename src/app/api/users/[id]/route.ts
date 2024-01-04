import connectMongoDB from "@/libs/mongodb";
import Organization from "@/models/organization";
import User from "@/models/user";
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
            newAvatar: avatar,
            newAuthConfirmed: authConfirmed,
            newOrganization: organization,
            newTasks: tasks
        }: any = await request.json();
        
        // const hashedPassword = await bcrypt.hash(password, 10);
        await connectMongoDB();
        const user = await User.findByIdAndUpdate(id, { username, email, password, avatar, authConfirmed, organization, tasks }).populate({path: "organization", model: Organization});
        console.log('__users.[id].rute', user)
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