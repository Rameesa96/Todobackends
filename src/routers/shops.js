const express = require("express");
const router = express.Router();



const { getShops, postShop, getShopById, deleteShop, editShop } = require("../controllers/shop");

// Routes
router.post('/', postShop);
router.get('/', getShops);
router.get('/:id', getShopById);
router.delete('/:id', deleteShop);
router.put('/:id', editShop);

module.exports = router;
