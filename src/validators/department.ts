import Joi from "joi";

//Validation schema config
const schema = Joi.object({
  depName: Joi.string().min(2).max(50).required(),
  desc: Joi.string().max(100).optional(),
}).required();

export default schema;
