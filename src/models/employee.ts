import { Schema, model } from "mongoose";

import { IEmployee } from "../interfaces/employee";

const EmployeeSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    birthday: { type: Date, required: true, trim: true },
    empID: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, trim: true, unique: true },
    phone: { type: String, required: true, trim: true, unique: true },
    salary: { type: Number, required: true, trim: true },
  },
  { timestamps: true }
);

export default model<IEmployee>("Employee", EmployeeSchema);
