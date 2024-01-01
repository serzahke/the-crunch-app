import mongoose, { Schema, Types } from 'mongoose';


// 1. Create an interface representing a document in MongoDB.
interface IOrganization {
    name: string;
    users:  Types.ObjectId;
}

// 2. Create a Schema corresponding to the document interface.
const organizationSchema = new Schema<IOrganization>({
    name: { type: String },
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }]
}, {
    timestamps: true
}
);
mongoose.Promise = global.Promise;

// 3. Create a Model.
const Organization = mongoose.models.Organization || mongoose.model<IOrganization>('Organization', organizationSchema);

export default Organization;