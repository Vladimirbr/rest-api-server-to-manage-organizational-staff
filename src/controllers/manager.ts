import * as queries from "../db/queries/manager";

export const addManager = async (params) => {
  try {
    const result = await queries.addManager(params);

    return result;
  } catch (e) {
    throw Error(e);
  }
};

export const departmentWithMostEmployees = async () => {
  try {
    const result = await queries.departmentWithMostEmployees();

    return result;
  } catch (e) {
    throw Error(e);
  }
};

export const assignEmployeeToManager = async (params) => {
  try {
    const result = await queries.assignEmployeeToManager(params);

    return result;
  } catch (e) {
    throw Error(e);
  }
};

export const assignManagerToDepartment = async (params) => {
  try {
    const result = await queries.assignManagerToDepartment(params);

    return result;
  } catch (e) {
    throw Error(e);
  }
};
