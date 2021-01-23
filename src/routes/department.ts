import { Router, Request, Response } from "express";
const validator = require("express-joi-validation").createValidator({});

import * as controller from "../controllers/department";

const router = Router();

import schema from "../validators/department";

/* POST create a new department. */
router.post("/addDepartment", validator.body(schema), async (req: Request, res: Response) => {
  try {
    const dataToReturn = await controller.addDepartment(req.body);

    res.status(200).json(dataToReturn);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

export default router;
