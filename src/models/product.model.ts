import mongoose, { Schema, Document} from "mongoose";

export interface IProduct extends Document {
  productname: string;
  productprice: number
}

const ProductSchema: Schema = new Schema({
  productname: { type: String, required: true },
  productprice: { type: Number, required: true }
})

export const Product = mongoose.model<IProduct>('Product', ProductSchema)