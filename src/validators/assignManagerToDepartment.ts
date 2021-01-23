import Joi from "joi";

//Validation schema config
const schema = Joi.object({
  _manId: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required(),
  _depId: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required(),
}).required();

export default schema;
