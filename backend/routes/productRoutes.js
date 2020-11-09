import express from 'express'
const router = express.Router()
import { 
    getProductById, 
    getProducts,
    deleteProduct
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMidleware.js'

//router.get('/',getProducts)
//Se pueden escribir de estas dos maneras
router.route('/').get(getProducts)

router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct)

export default router