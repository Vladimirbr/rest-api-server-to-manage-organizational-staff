import { Document } from "mongoose";

export interface IEmployee extends Document {
  firstName: string;
  lastName: string;
  birthday: Date;
  empID: string;
  salary: number;
  email: string;
  phone: string;
}
