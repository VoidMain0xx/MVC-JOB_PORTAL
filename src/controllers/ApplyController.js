import path from 'path';
import ApplyModel from '../models/ApplyModel.js';
import mailSent from '../middleware/sendMailMiddleware.js';

export default class ApplyController{

   getForm(req , res ){
    let jobs = ApplyModel.get();
      //   console.log(jobs);
        res.render('applyJob' , {jobs}) 
   }

   add(req , res ){
      const {jobid , contact , email , image} = req.body;
      console.log(req.body);
      let jobs = ApplyModel.add(jobid , contact , email , image);
      return res.render('success')
      // res.status(200).json({ message: 'Job application submitted successfully. ' + req.body.email });
   }

   getEmail(req , res , next){
      const email = req.body.email;
      console.log(email)
       mailSent(email);
      next();
   }

}