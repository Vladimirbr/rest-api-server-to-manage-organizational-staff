import { Schema, model } from "mongoose";

import { IManager } from "../interfaces/manager";

const ManagerSchema: Schema = new Schema(
  {
    empRef: { type: Schema.Types.ObjectId, ref: "Employee", required: true, unique: true },
    depRef: { type: Schema.Types.ObjectId, ref: "Department", sparse: true },
    employees: [{ type: Schema.Types.ObjectId, ref: "Employee" }],
  },
  { timestamps: true }
);

export default model<IManager>("Manager", ManagerSchema);
