import express from 'express'
const router = express.Router()
import { 
    getProductById, 
    getProducts 
} from '../controllers/productController.js'

//router.get('/',getProducts)
//Se pueden escribir de estas dos maneras
router.route('/').get(getProducts)

router.route('/:id').get(getProductById)

export default router