import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: Sting,
      required: true,
      maxLength: 60,
    },
    desc: {
      type: Sting,
      required: true,
      maxLength: 120,
    },
    prices: {
      type: [Number],
      required: true,
    },
    img: {
      type: Sting,
    },
    extrasOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: String, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.product ||
  mongoose.model("Product", productSchema);
