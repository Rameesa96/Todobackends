const mongoose = require("mongoose");
const multer = require("multer");

const ImageSchema = new mongoose.Schema({
  path: {
    type: String,
    required: [true, "Please add image path"],
  },
  description: {
    type: String,
  },
});

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add name"],
  },
  categoryId: {
    type: String,
    required: [true, "Please add category details"],
  },
  categoryName: {
    type: String,
    required: [true, "Please add category details"],
  },
  description: String,
  offerPrice: Number,
  ratingCount: [Number],
  price: Number,
  deliveryDate: Date,
  count: {
    xxl:{ type: Number, default: 0 },
    xl:{ type: Number, default: 0 },
    l: { type: Number, default: 0 },
    m: { type: Number, default: 0 },
    s: { type: Number, default: 0 },
  },
  Details: {
    material: String,
    clean: String,
    color: String,
  },
  offeredProduct: Boolean,
  images: [ImageSchema],
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the destination folder for uploads
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Generate a unique filename
  },
});

const upload = multer({ storage: storage });

module.exports = {
  Products: mongoose.model("products", ProductSchema),
  upload: upload,
};
