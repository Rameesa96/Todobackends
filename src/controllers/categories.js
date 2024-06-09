const {Categories} = require("../models/categories")
const {Products} = require("../models/product")


const postCategories = async (req, res) => {
    try {
        const { name, description,about } = req.body;
        const imagePath = req.file.path

        const category =await new Categories({
            name,
            about,
            image: { path: imagePath, description }
        });

        const savedCategory = await category.save();

        res.status(201).json({
            success: true,
            message: "Category created successfully",
            data: savedCategory
        });
    } catch (error) {
        // If an error occurs, log it and send an error response
        console.error(error);
        res.status(500).json({ success: false, error: "Server error" });
    }
};

const DeleteCategoryById=async(req,res)=>{
try{
    const categoryId=req.params.id
    const deleteCategory=await Categories.findByIdAndDelete(categoryId)
    const deletedProducts = await Products.deleteMany({ categoryId: categoryId });

    res.status(200).json({success: true,
        message: "Category deleted successfully"});

}
catch(error){
    console.error(error);
    res.status(500).json({ success: false, error: "Server error" });
}
}

const getCategory=async(req,res)=>{
    const categoryId =req.params.id
    try{
        const categories=await Categories.findById(categoryId)
        const products = await Products.find({categoryId:categoryId})
        res.status(201).json({success:true,data:{category:categories,products:products}})
    }
    catch(error){
        console.error(error);
        res.status(500).json({ success: false, error: "Server error" });
    }
    }
    const editCategory = async (req, res) => {
        console.log(req.body)
        const categoryId = req.params.id;
        try {
            const { name, description, about } = req.body;
            const updateData = { name, about };
    
            if (req.file) {
                const imagePath = req.file.path;
                updateData.image = { path: imagePath, description };
            }
    
            const updatedCategory = await Categories.findByIdAndUpdate(categoryId, updateData, { new: true });
    
            res.status(200).json({
                success: true,
                message: "Category updated successfully",
                data: updatedCategory
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: "Server error" });
        }
    };
    
    const getAllCategories=async(req,res)=>{
        try{
            const categories=await Categories.find()
            res.status(201).json({success:true,data:categories})
        }
        catch(error){
            console.error(error);
            res.status(500).json({ success: false, error: "Server error" });
        }
        }
module.exports={DeleteCategoryById,postCategories,getAllCategories,getCategory,editCategory}