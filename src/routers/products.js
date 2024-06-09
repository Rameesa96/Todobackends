const express = require("express");
const router = express.Router();



const {DeleteProductById,postProducts ,getAllProducts,getProductById, editProductById} = require("../controllers/product");
const { upload } = require("../models/product");
const {protect} = require("../middlewares/auth")

// Routes
router.get('/', getAllProducts);
router.post('/',protect, upload.array('images', 5),postProducts);
router.post('/:id',protect, DeleteProductById);
router.get('/:id',getProductById)
router.put('/edit/:id',protect,upload.array('images', 5),editProductById)

module.exports = router;