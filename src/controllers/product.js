
const {Products} = require("../models/product")

const editProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const {
            name,
            categoryId,
            categoryName,
            description,
            offerPrice,
            price,
            deliveryDate,
            count,
            salesPackage,
            Details,
            offeredProduct
        } = req.body;

        const updateData = {
            name,
            categoryId,
            categoryName,
            description,
            offerPrice,
            price,
            deliveryDate,
            count,
            salesPackage,
            Details,
            offeredProduct
        };

        if (req.files && req.files.length > 0) {
            const imagePath = req.files.map((item) => ({
                path: item.path,
                description: "image"
            }));
            updateData.images = imagePath;
        }

        console.log("Update Data:", updateData); // Debugging line
        const updatedProduct = await Products.findByIdAndUpdate(
            productId,
             updateData,
            { new: true}
        );
        console.log(updatedProduct)
        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ success: false, error: "Server error" });
    }
};




const postProducts = async (req, res) => {
    try {
        const imagePath = req.files.map((item) => ({
            path: item.path
        }));
        const { name, categoryId,categoryName, description, offerPrice, price,salesPackage, deliveryDate, count, Details, offeredProduct } = req.body;
         
        const products = await new Products({
            name: name,
            categoryId: categoryId,
            categoryName:categoryName,
            description: description,
            offerPrice: offerPrice,
            price: price,
            salesPackage:salesPackage,
            deliveryDate: deliveryDate,
            count: count,
            Details: Details,
            offeredProduct: offeredProduct,
            images: imagePath // No need to wrap imagePath in an array
        });

        const savedCategory = await products.save();
           console.log(savedCategory)
        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: savedCategory
        });
    } catch (error) {
        // If an error occurs, log it and send an error response
        console.error(error);
        res.status(500).json({ success: false, error: "Server error" });
    }
};


const DeleteProductById=async(req,res)=>{
try{
    const productId=req.params.id
    console.log(req.body)
    const {size}=req.body
    const product=await Products.findById(productId)
    if(product.count[size]>0){
        product.count[size]-=1
    }
    console.log(size)
    await product.save()
    res.status(200).json({success:true,data:product})
}
catch(error){
    res.status(500).json({ success: false, error: "Server error" });
}
}

const getProductById=async(req,res)=>{
    const productId = req.params.id
    try{
        const product = await Products.findById(productId)
        res.status(200).json({message:"success",data:product})
    }
    catch(error){
        res.status(500).json(error)
    }
}

const getAllProducts=async(req,res)=>{
    try{
        const products=await Products.find()
        res.status(201).json({success:true,data:products})
    }
    catch(error){
        res.status(500).json({ success: false, error: "Server error" });
    }
    }

module.exports={DeleteProductById,postProducts,getAllProducts,getProductById,editProductById}