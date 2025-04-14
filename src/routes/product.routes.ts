import { Router } from 'express'
import ProductController from '../controllers/product.controller'

const ProductRouter = Router()

ProductRouter.get('/', ProductController.getAllProducts)
ProductRouter.get('/search', ProductController.getProductsByFirstname)
ProductRouter.get('/:id', ProductController.getProductById)
ProductRouter.post('/', ProductController.createProduct)
ProductRouter.put('/:id', ProductController.updateProductById)
ProductRouter.delete('/:id', ProductController.deleteProductById)

export default ProductRouter