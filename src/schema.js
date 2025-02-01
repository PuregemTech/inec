import Joi from 'joi';

export const schema = Joi.object ({
  email: Joi.string ().required ().label ('Email'),
  password: Joi.string ().min (8).required ().label ('Password'),
});
