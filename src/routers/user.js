const express = require("express");
const { getUser, postUser,getAllUser, editUser, addToCart,removeFromCart, addToWishlist, removeFromWishList} = require("../controllers/user");
const {Login,Registration,Logout}=require('../controllers/authentication')
const {protect} = require("../middlewares/auth")
const router =express.Router()

router.get("/:id",protect,getUser)
router.post("/edit/:id",editUser)
router.get("/",getAllUser)
router.post("/",postUser)
router.post("/login",Login)
router.post("/logout",Logout)
router.post("/register",Registration)
router.post("/:id/addtocart",protect,addToCart)
router.post("/:id/removefromcart",protect,removeFromCart)
router.post("/:id/addtowishlist",protect,addToWishlist)
router.post("/:id/removefromwishlist",protect,removeFromWishList)
module.exports = router;