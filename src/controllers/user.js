const { User } = require("../models/user");

const postUser = async (req, res) => {
  const user = new User({
    name: req.body.name,
    role: req.body.role,
    place: req.body.place,
    shop_name: req.body.shop_name,
  });
  req.files?.forEach((file) => {
    shop.images.push({ path: file.path, description: "" });
  });

  try {
    const postedUser = await user.save();
    res.status(200).json(postedUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};
const addToWishlist = async (req, res) => {
  const userId = req.params.id;
  const { productId, size } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const productExist = user.wishList.filter((product) => product.productId === productId && product.size === size);

    if (productExist.length === 0) {
      user.wishList.push({ productId, size });
      await user.save();
      return res.status(200).json({ message: 'Product added to wish list', wishList: user.wishList });
    } else {
      return res.status(200).json({ message: 'Product already in wish list', wishList: user.wishList });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const editUser = async (req, res) => {
  const id = req.params.id;
  const updatedData = {
    $set: {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    },
  };
  try {
    const editUser = await User.findOneAndUpdate({ _id: id }, updatedData, {
      new: true,
    });
    res.status(200).json(editUser);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

const addToCart = async (req, res) => {
  const userId = req.params.id;
  const { productId, price, count, size, imagePath, name,offerPrice ,deliveryDate} = req.body;
  console.log(req.body)

  try {
      const user = await User.findById(userId);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      const existingProductIndex = user.cart.findIndex(
          item => item.productId === productId && item.size === size
      );

      if (existingProductIndex !== -1) {
          user.cart[existingProductIndex].count +=1;
      } else {
          user.cart.push({ productId, price, count, size, imagePath, name,offerPrice,deliveryDate });
      }
      await user.save();
      res.status(200).json({ message: 'Product added to cart', cart: user.cart });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

const removeFromCart = async (req, res) => {
  const userId = req.params.id;
  const { productId,size,deleteAll} = req.body;
  try {
      const user = await User.findById(userId);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      const existingProductIndex = user.cart.findIndex(
          item => item.productId === productId && item.size === size
      );
      
      if (existingProductIndex !== -1) {
        if(deleteAll){user.cart.splice(existingProductIndex, 1);}else{
        if(user.cart[existingProductIndex].count>1){
          user.cart[existingProductIndex].count -=1;}else{
            user.cart.splice(existingProductIndex, 1);
          }}
      }
      await user.save();
      res.status(200).json({ message: 'Product removed from cart', cart: user.cart });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};



const removeFromWishList = async (req, res) => {
  const userId = req.params.id;
  const { productId,size} = req.body;
  try {
      const user = await User.findById(userId);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      const existingProductIndex = user.wishList.findIndex(
          item => item.productId === productId && item.size === size
      )
      if (existingProductIndex !== -1) {
      user.wishList.splice(existingProductIndex, 1);
      }
      await user.save();
      res.status(200).json({ message: 'Product removed from cart', wishList: user.wishList });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = { postUser, getUser, getAllUser, editUser ,addToCart,removeFromCart ,addToWishlist,removeFromWishList} ;
