import { Router, Request, Response } from "express";

const validator = require("express-joi-validation").createValidator({});

import * as controller from "../controllers/manager";

const router = Router();

import * as managerSchema from "../validators/manager";
import * as assignEmployeeToManagerSchema from "../validators/assignEmployeeToManager";
import * as assignManagerToDepartmentSchema from "../validators/assignManagerToDepartment";

/* GET department that has the most employees. */
router.get("/departmentWithMostEmployees", async (req: Request, res: Response) => {
  try {
    const dataToReturn = await controller.departmentWithMostEmployees();

    res.status(200).send(dataToReturn);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

/* POST create a new manager. */
router.post("/addManager", validator.body(managerSchema.default), async (req: Request, res: Response) => {
  try {
    const dataToReturn = await controller.addManager(req.body);

    res.status(200).json(dataToReturn);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

/* PUT Assign an employee to a manager. */
router.put("/assignEmployeeToManager", validator.body(assignEmployeeToManagerSchema.default), async (req: Request, res: Response) => {
  try {
    const dataToReturn = await controller.assignEmployeeToManager(req.body);

    res.status(200).json(dataToReturn);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

/* PUT Assign a manager to a department. */
router.put("/assignManagerToDepartment", validator.body(assignManagerToDepartmentSchema.default), async (req: Request, res: Response) => {
  try {
    const dataToReturn = await controller.assignManagerToDepartment(req.body);

    res.status(200).json(dataToReturn);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

export default router;
