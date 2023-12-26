import mongoose, { Schema } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface ICategory {
    value: string;
    label: string;
}

// 2. Create a Schema corresponding to the document interface.
const categorySchema = new Schema<ICategory>({
    value: { type: String, required: true },
    label: { type: String, required: true },
}, {
    timestamps: true
}
);
mongoose.Promise = global.Promise;

// 3. Create a Model.
const Category = mongoose.models.Category || mongoose.model<ICategory>('Category', categorySchema);

export default Category;