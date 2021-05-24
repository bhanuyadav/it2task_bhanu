import express from 'express'
//import asyncHandler from 'express-async-handler'
//import Product from '../models/productModel.js'
import { protect, admin } from '../middleware/authMiddleware.js'
const router = express.Router()
import { 
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
 } from '../controllers/productController.js'
//import { updateProduct } from '../../frontend/src/actions/productActions.js'

router.route('/').get(getProducts).post(protect,admin,createProduct)
router.route('/:id').get(getProductById).delete(protect,admin,deleteProduct).
put(protect,admin,updateProduct)
 
export default router