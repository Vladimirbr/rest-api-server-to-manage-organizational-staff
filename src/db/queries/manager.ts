import Manager from "../../models/manager";
import { IManager } from "../../interfaces/manager";

export const addManager = async (params: { _manId: string }) => {
  try {
    const manager = new Manager({
      empRef: params._manId,
    });

    const newManager: IManager = await manager.save();

    return newManager;
  } catch (e) {
    throw Error(e);
  }
};

export const assignEmployeeToManager = async (params: { _manId: any; _empId: any }) => {
  try {
    const updatedManager: IManager = await Manager.updateOne({ _id: params._manId }, { $addToSet: { employees: params._empId } });

    return updatedManager;
  } catch (e) {
    throw Error(e);
  }
};

export const assignManagerToDepartment = async (params: { _manId: any; _depId: any }) => {
  try {
    const updatedDepartment: IManager = await Manager.updateOne({ _id: params._manId }, { $set: { depRef: params._depId } });

    return updatedDepartment;
  } catch (e) {
    throw Error(e);
  }
};

export const departmentWithMostEmployees = async () => {
  try {
    const result = Manager.aggregate([
      {
        $project: { _id: 0, depRef: 1, employees: 1 },
      },
      {
        $unwind: "$employees",
      },
      {
        $group: {
          _id: "$depRef",
          count: { $sum: 1 },
        },
      },
      {
        $sort: {
          count: -1,
        },
      },
      {
        $limit: 1,
      },
      {
        //TODO if there are more than 1 dep with max emp?
        $lookup: {
          from: "departments",
          localField: "_id",
          foreignField: "_id",
          as: "departments",
        },
      },
      {
        $project: { _id: 0, count: 1, "departments.depName": 1 },
      },
    ]);

    return result;
  } catch (e) {
    throw Error(e);
  }
};
