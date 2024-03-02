import mongoose, { Schema } from "mongoose";

const poetrySchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  content: {
    type: String,
    required: [true, "Poem content is required"],
  },
  img: {
    type: String,
  },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  likes: { type: Number, default: 0 },
});

poetrySchema.index({ title: 1, category: 1 }, { unique: true });

export const PoetryModel = mongoose.model("Poetry", poetrySchema);
