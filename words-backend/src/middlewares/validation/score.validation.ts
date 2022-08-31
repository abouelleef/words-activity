import { body } from "express-validator";
import { validator } from "./validator";

// Validating the score in the request body to be a Intger between 0 and 100

export const scoreValidation = [

  body("score")
    .isInt({ max: 100, min: 0 })
    .withMessage("score must be between 0 and 100"),


  validator,
];
