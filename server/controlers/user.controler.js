import User from "../model/user.modal.js";
import bcryptjs from "bcryptjs";

export const signUp = async(req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ message: "user already exist" });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    console.log(`user created ${newUser}`);
    return res.status(200).json({ message: "user created",user:{id:newUser._id,username:newUser.username,email:newUser.email} });
  } catch (error) {
    console.log(`erroe ${error}`);
    res.status(500).json({ error:"internal server error" });
  }
};


export const login = async(req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ error: "user not found" });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "wrong password" });
    }
    console.log(`user login success ${user}`);
    return res.status(200).json({ message: "login success", user:{id:user._id,username:user.username,email:user.email} });
  } catch (error) {
    console.log(`erroe ${error}`);
    res.status(500).json({ error:"internal server error" });
  }
}