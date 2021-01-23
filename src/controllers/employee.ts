import * as queries from "../db/queries/employee";

export const addEmployee = async (params) => {
  try {
    const result = await queries.addEmployee(params);

    return result;
  } catch (e) {
    throw Error(e);
  }
};
