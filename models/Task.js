
const mongoose = require('mongoose')
const CategorySchema = mongoose.Schema({
    Name:{
        type:String,
        require:true,
        },

Priority:{
    type:Number
},
Status:{
    type:String
},
Enddate:{
    type:Date
}
        
})
module.exports = mongoose.model("task",CategorySchema)