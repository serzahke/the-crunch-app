import mongoose, { ObjectId, Schema, Types } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IUser {
    username: string;
    email: string;
    password: string;
    organization: Types.ObjectId;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
    username: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true },
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
const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;