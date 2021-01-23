import { Router, Request, Response } from "express";
const validator = require("express-joi-validation").createValidator({});

import * as controller from "../controllers/employee";

const router = Router();

import schema from "../validators/employee";

/* POST create a new employee. */
router.post("/addEmployee", validator.body(schema), async (req: Request, res: Response) => {
  try {
    const dataToReturn = await controller.addEmployee(req.body);

    res.status(200).json(dataToReturn);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

export default router;
