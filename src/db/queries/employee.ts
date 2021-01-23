import Employee from "../../models/employee";
import { IEmployee } from "../../interfaces/employee";

export const addEmployee = async (params: {
  firstName: string;
  lastName: string;
  birthday: string;
  empID: string;
  email: string;
  phone: string;
  salary: number;
}) => {
  try {
    const employee = new Employee({
      firstName: params.firstName,
      lastName: params.lastName,
      birthday: params.birthday,
      empID: params.empID,
      email: params.email,
      phone: params.phone,
      salary: params.salary,
    });

    const newEmployee: IEmployee = await employee.save();

    return newEmployee;
  } catch (e) {
    throw Error(e);
  }
};
