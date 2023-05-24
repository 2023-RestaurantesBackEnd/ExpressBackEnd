import { check } from "express-validator"; 
import validateResult from "../helpers/validateHelper.js"
import { Request, Response, NextFunction } from "express";


const validateCreate = [
    check('restaurantName')
    .exists()
    .not()
    .isEmpty(),

    check('email')
    .exists()
    .isEmail(),

    check('password')
    .exists(),
    
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next)
    }
    
]

export default validateCreate 