import Department from "../../models/department";
import { IDepartment } from "../../interfaces/department";

export const addDepartment = async (params: { depName: string; desc: string }) => {
  try {
    const department = new Department({
      depName: params.depName,
      desc: params.desc,
    });

    const newDepartment: IDepartment = await department.save();

    return newDepartment;
  } catch (e) {
    throw Error(e);
  }
};
