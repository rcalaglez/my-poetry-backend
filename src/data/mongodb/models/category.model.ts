import mongoose, { Schema } from "mongoose";
import { CategoryType } from "../../../domain/enums/category-type.enum";

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Category name is required"],
  },
  type: {
    type: String,
    enum: Object.values(CategoryType),
  },
});

export const CategoryModel = mongoose.model("Category", categorySchema);
