const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../models/user");
const {BlackListToken}=require('../models/blacklisted');
const Registration = async (req, res) => {
  const { name, email, password ,phone_number,role} = req.body;
  if (!name || !email|| !password||!phone_number) {
    throw new Error("please fill all the fields")
  }
  const user = await User.findOne({ email: email });
  if (user) {
    throw new Error("user already exist");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(password, salt);
  const newUser = await new User({
    name:name,
    role:role,
    email: email,
    phone_number:phone_number,
    password: hashedpassword,
  });
  try {
    const saveduser = await newUser.save();
    res.status(200).json(saveduser);
  } catch (error) {
    res.status(500).json(error);
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error("please fill all the field");
  }
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("User does not exist");
    }
    if (user && (await bcrypt.compare(password, user.password))){
      res.status(200).json({
        id: user._id,
        name: user.name,
        email: user.email,
        token: GenerateJWT(user._id),
        role:user.role
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const Logout = async(req,res)=>{
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(400).json({ message: 'No token provided' });
  }
  try {
    const tokenblacklisted =new BlackListToken({ token:token })
    await tokenblacklisted.save()
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging out', error });
  }
}
const GenerateJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = { Login, Registration,Logout };
