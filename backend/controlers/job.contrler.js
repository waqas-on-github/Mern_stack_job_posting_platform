import asyncHandler from "../utils/asyncHandler.js";
import CustomError from "../utils/CustomError.js";
import { Job } from "../models/job.model.js";
import Joi from "joi";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";



const createJob = asyncHandler(async (req, res) => {
    
    // todo later restrict user to send not more then 5 job request to same company 
    
    const schema = Joi.object({
      company: Joi.string().required(),
      position: Joi.string().required(),
      jobStatus: Joi.string().valid(...Object.values(JOB_STATUS),).required(), 
      jobType: Joi.string().valid(...Object.values(JOB_TYPE)).required(), 
      jobLocation : Joi.string().required().default("karachi")
      
    });
   
    const { error } = schema.validate(req.body)
    if (error) {
        throw new  CustomError(error , 400)
    }


    const job = await Job.create(req.body)

    if (!job) {
        throw new CustomError("job can not be created" , 400)        
    }


    res.status(201).json({
        success: true, 
        job
        
    })


})


const deleteJob = asyncHandler(async (req, res) => {
    // id 

    const { id } = req.params 


       const schema =  Joi.string().required()

       const { error } = schema.validate(id);
       if (error) {
         throw new CustomError(error, 400);
       }

    
    const deleted = await Job.findByIdAndDelete(id)

    if (!deleted) {
        throw new CustomError(" job can not be deletd" , 400) 
    }


    res.status(200).json({
        success: true, 
        deleted
  })

})


const getAllJobs = asyncHandler(async (req, res) => {
    
    const jobs = await Job.find() 
    if (!jobs) {
        throw new CustomError("no jobs found " , 400)
    }

    res.status(201).json({
        success: true, 
        jobs
    })
})


const getOneJob = asyncHandler(async(req, res) => {
    const { id } = req.params
    
       const schema =  Joi.string().required()
      

       const { error } = schema.validate(id);
       if (error) {
         throw new CustomError(error, 400);
       }
    
    

    const job = await Job.findById(id)
   
    if (!job) {
        throw new CustomError("no job found " , 400)
    }


    res.status(200).json({ 
        success: true, 
        job
    })
})

const updateJob = asyncHandler(async (req, res) => {
    const { id } = req.params 
   
       const schema = Joi.string().required()
      

       const { error } = schema.validate(id);
       if (error) {
         throw new CustomError(error, 400);
       }


    const updated = await Job.findByIdAndUpdate(id, req.body, { new: true })
    
    if (!updated) {
        throw new CustomError("job can not be updated " , 400)
    }

    res.status(200).json({
        success: true, 
        updated
    })
      
})

const deleteAllJobs = asyncHandler(async (req, res) => {
    
    const AllJobs = await Job.deleteMany()

    if (!AllJobs) {
        throw new CustomError("jobs not found " , 400)
    }

    res.status(200).json({ 
        success: true, 
        AllJobs
    })


 })

export {
    createJob, 
    deleteJob, 
    getOneJob, 
    getAllJobs, 
    deleteAllJobs, 
    updateJob

}