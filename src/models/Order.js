import mongoose, { Schema } from "mongoose";
import { Schema } from "mongoose";

const OrderSchema = new Schema({
  customer: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    default: 0,
  },
  address: {
    type: String,
    required: true,
  },
});

export default mongoose.model.Orders || mongoose.model("Orders", OrderSchema);
