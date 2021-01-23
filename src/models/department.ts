import { Schema, model } from "mongoose";

import { IDepartment } from "../interfaces/department";

const DepartmentSchema: Schema = new Schema(
  {
    depName: { type: String, required: true, unique: true, trim: true },
    desc: { type: String, trim: true },
  },
  { timestamps: true }
);

export default model<IDepartment>("Department", DepartmentSchema);
