import express from 'express'
//import asyncHandler from 'express-async-handler'
//import Product from '../models/productModel.js'
const router = express.Router()

import { 
    authUser,
    registerUser,
    getUserProfile
 } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'


 router.route('/').post(registerUser)
 router.post('/login',authUser)
 router.route('/profile').get(protect,getUserProfile)
 
export default router