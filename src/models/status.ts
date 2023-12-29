import mongoose, { Schema } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IStatus {
    value: string;
    label: string;
}

// 2. Create a Schema corresponding to the document interface.
const statusSchema = new Schema<IStatus>({
    value: { type: String, required: true },
    label: { type: String, required: true },
}, {
    timestamps: true
}
);
mongoose.Promise = global.Promise;

// 3. Create a Model.
const Status = mongoose.models.Status || mongoose.model<IStatus>('Status', statusSchema);

export default Status;