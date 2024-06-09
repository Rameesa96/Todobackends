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

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add name"]
    },
    about: {
        type: String,
        required: [true, "Please add name"]
    },
    image: ImageSchema
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
    Categories: mongoose.model("categories", CategorySchema),
    upload: upload
};