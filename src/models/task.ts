import mongoose, { Schema } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface ITask {
    title: string;
    description: string;
    status: "backlog" | "todo" | "inprogress" | "done";
    reporter: string;
    assigned: string;
    category: string;
    confirmedByOwner: boolean;
}

// 2. Create a Schema corresponding to the document interface.
const taskSchema = new Schema<ITask>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String },
    reporter: { type: String },
    assigned: { type: String },
    category: { type: String },
    confirmedByOwner: { type: Boolean }
}, {
    timestamps: true
}
);
mongoose.Promise = global.Promise;

// 3. Create a Model.
const Task = mongoose.models.Task || mongoose.model<ITask>('Task', taskSchema);

export default Task;