import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
//import products from './data.js/products.js'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'


dotenv.config()

connectDB()

const app = express()

app.use(express.json())
app.get('/',(req,res) =>{
    res.send('API is running...')
})


app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/upload',uploadRoutes)

const __dirname = path.resolve()
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server running on port ${PORT}`))