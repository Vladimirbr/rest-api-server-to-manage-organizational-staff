import { Document, Types } from "mongoose";

import { IEmployee } from "./employee";
import { IDepartment } from "./department";

export interface IManager extends Document {
  empRef: IEmployee;
  depRef?: IDepartment;
  employees?: Array<Types.ObjectId>;
}
