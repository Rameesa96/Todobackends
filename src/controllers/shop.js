const{ Shop } = require('../models/Shop')

const postShop = async(req,res)=>{
    const shop = new Shop({
        name:req.body.name,
        owner:req.body.owner,
        place:req.body.place
    })
    req.files?.forEach(file => {
        shop.images.push({ path: file.path, description: '' });
    });

    try{
        const shops = await shop.save()
        res.status(200).json(shops)
    }
    catch(error){
        res.status(500).json(error)
    }
}

const getShops = async(req,res)=>{
    try{
        const shops = await Shop.find()
        res.status(200).json(shops)
    }
    catch(error){
        res.status(500).json(error)
    }
}

const getShopById=async(req,res)=>{
    try{
        const id = req.params.id
        const shop=await Shop.findById(id)
        res.status(200).json(shop)
    }
    catch(error){
        res.status(500).json(error)
    }
}
const deleteShop=async(req,res)=>{
    try{
        const id=req.params.id
        const deletedShop = await Shop.findByIdAndDelete(id)
        if (!deletedShop) {
            // If the shop is not found, respond with a 404 status
            return res.status(404).json({ message: 'Shop not found' });
        }

        res.status(200).json({ message: `${deletedShop.name} deleted successfully` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const editShop = async(req,res)=>{
    try{
        const editedShop = await Shop.findByIdAndUpdate(req.params.id,{$set:
            {name:req.params.name,
            place:req.params.place,
        owner:req.params.owner}},{new:true})
        res.status(200).json(editedShop)
    }
    catch(error){
        res.status(500).json(error)
    }
}
module.exports={postShop,getShops,deleteShop,getShopById,editShop}
