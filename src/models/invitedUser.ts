import mongoose, { ObjectId, Schema, Types } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IInvitedUser {
    email: string;
    invitedBy: Types.ObjectId;
    organization: Types.ObjectId;
}

// 2. Create a Schema corresponding to the document interface.
const invitedUserSchema = new Schema<IInvitedUser>({
    email: { type: String, required: true},
    invitedBy: { 
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    organization: {
        type: Schema.Types.ObjectId,
        ref: "Organization"
    }
}, {
    timestamps: true
}
);
mongoose.Promise = global.Promise;

// 3. Create a Model.
const InvitedUser = mongoose.models.InvitedUser || mongoose.model<IInvitedUser>('InvitedUser', invitedUserSchema);

export default InvitedUser;