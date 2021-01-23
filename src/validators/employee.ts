import Joi from "joi";

//Validation schema config
const schema = Joi.object({
  firstName: Joi.string().min(2).max(50).required(),
  lastName: Joi.string().min(2).max(50).required(),
  birthday: Joi.date().less("now").greater("1-1-1910").required(),
  empID: Joi.string().min(1).max(15).required(),
  salary: Joi.number().min(100).max(10000000).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
}).required();

export default schema;
