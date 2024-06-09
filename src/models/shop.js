const mongoose = require('mongoose');
const multer = require('multer');

const ImageSchema = new mongoose.Schema({
    path: {
        type: String,
        required: [true, "Please add image path"],
    },
    description: {
        type: String,
        // You can add other properties for images if needed
    },
});

const ShopSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add name"]
    },
    place: {
        type: String,
        required: [true, "Please add place"]
    },
    owner: {
        type: String,
        required: [true, "Please add owner name"]
    },
    images: [ImageSchema]
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');  // Specify the destination folder for uploads
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);  // Generate a unique filename
    }
});

const upload = multer({ storage: storage });

module.exports = {
    Shop: mongoose.model("Shop", ShopSchema),
    upload: upload
};
