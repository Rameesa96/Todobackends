const mongoose = require('mongoose')
const multer = require('multer')
const ImageSchema = new mongoose.Schema({
    path: {
        type: String,
        required: [true, "Please add image path"],
    },
    description: {
        type: String,
    },
});
const UserSchema = mongoose.Schema({
    name:{
        type:String,
        require:[true,"Please add name"]
    },
    password:{
        type:String,
        require:[true,'please add name']
    },
    email:{
        type:String,
        require:[true,"Please add name"]
    },
    phone_number:{
        type:Number,
        require:[true,"Please add name"]
    },
    role:String,
    addresses:[],
    images:[ImageSchema],
    cart:[{
        productId:String,
        price:String,
        size:String,
        count:Number,
        imagePath:String,
        name:String,
        offerPrice:String,
        deliveryDate:Date
    }],
    wishList:[{
        productId:String,
        size:String,
    }]
})
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
    User: mongoose.model("user", UserSchema),
    upload: upload
};