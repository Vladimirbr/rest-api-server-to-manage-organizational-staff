import { Document } from "mongoose";

export interface IDepartment extends Document {
  depName: string;
  desc?: string;
}
