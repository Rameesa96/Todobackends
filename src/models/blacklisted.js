const mongoose = require("mongoose")

const BlackListSchema=new mongoose.Schema({
    token: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        expires: '30d', // Token will be removed after 30 days
      },
    
})
module.exports = {
    BlackListToken: mongoose.model("black_listed_Tokens",BlackListSchema),
};



