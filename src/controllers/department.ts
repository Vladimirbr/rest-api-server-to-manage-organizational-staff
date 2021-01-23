import * as queries from "../db/queries/department";

export const addDepartment = async (params) => {
  try {
    const result = await queries.addDepartment(params);

    return result;
  } catch (e) {
    throw Error(e);
  }
};
