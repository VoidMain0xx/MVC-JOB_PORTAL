import path from 'path';
import jobsModel from '../models/jobsModel.js';

export default class jobsController{
    getJob(req ,res ){
        let jobs = jobsModel.get();
        // console.log(jobModel);
        res.render('index' , { jobs : jobs}) 
    }

    getAddForm(req , res){
        return res.render('addjob' , {errorMessage : null})
    }

    jobUpdate(req , res){
        jobsModel.updateChanges(req.body);
        var jobs = jobsModel.get();
        res.render('index' , { jobs })

    }

    deleteJob(req , res ){
        const id  = req.params.id;
        console.log(id)
        const jobfound = jobsModel.getByID(id);
        if(!jobfound){
           return  res.status(401).send('job not found') 
        } 
        console.log(id)
        jobsModel.delete(id);
        var jobLeft = jobsModel.get();
        res.render('index' , { jobLeft })
    }

    addNewJob(req, res , next ) {
        console.log(req.body);
        const data = jobsModel.add(req.body);
        let jobs = jobsModel.get();
        return res.render('index' , { jobs })
       
    }

    editJob(req , res , next){
        const id = req.params.id;
        console.log(id)
        const jobfound = jobsModel.getByID(id);
        if(jobfound){
            res.render('editJobs' , {jobs : jobfound ,  errorMessage: null})
        }else{
            res.status(401).send('product not found') 
        }
    } 

    
}