const express = require("express");
const router = express.Router();




const {DeleteCategoryById,postCategories ,getAllCategories,getCategory, editCategory} = require("../controllers/categories");
const { upload } = require("../models/categories");
const {protect} = require("../middlewares/auth")

// Routes
router.get('/', getAllCategories);
router.post('/',protect,upload.single('image') ,postCategories);
router.put('/edit/:id',protect,upload.single('image'),editCategory)
router.delete('/:id',protect, DeleteCategoryById);
router.get('/:id', getCategory);

module.exports = router;