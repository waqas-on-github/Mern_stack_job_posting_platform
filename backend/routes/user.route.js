import { Router } from "express";
import {
  deleteAllUsers,
  deleteOneUser,
  getAllUsers,
  getProfile,
  login,
  logout,
  signUp,
  updateOneUser,
} from "../controlers/user.controler.js";

const router = Router() 


router.post('/new', signUp)
router.post('/login/:id' , login )

router.get('/', getAllUsers) 
router.get("/logout" , logout)
router.get("/:id", getProfile)

router.delete('/delete', deleteAllUsers)
router.delete('/delete/:id', deleteOneUser)

router.put("/update/:id" , updateOneUser)



export {router}