import { body, validationResult } from "express-validator";


const validateRequest = async (req , res , next) => {
    console.log (req.body);
    const rules = [
        body('company').notEmpty().withMessage("Company name is required"),
        body('designation').notEmpty().withMessage("Enter a Valid designation"),
        body('desc').notEmpty().withMessage("enter at least 2 words"),
        body('image').isURL().withMessage("url does not exists")
    ];
    
    await Promise.all(rules.map((rule) => rule.run(req)));
    var validationErrors = validationResult(req);
    console.log(validationErrors);
    // 4. if errros, return the error message
    if (!validationErrors.isEmpty()) {
      return res.render('addJob', {
        errorMessage:
          validationErrors.array()[0].msg,
      });
    }
    next();

    
}

export default validateRequest;