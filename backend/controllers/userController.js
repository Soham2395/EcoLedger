import Users from "../models/userModel.js";
import {
  CompareString,
  createJWT,
  hashString,
} from "../utils/index.js";

export const register = async (req, res) => {
  try {
    const { username, email, password, role, companyName } = req.body;
    console.log(username, email, password, role, companyName);

    if (!username || !email || !password) {
      return res.status(400).json({ msg: "Please fill all required field" });
    }

    // Validate the password here
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        msg: "Password must contain at least one number, one uppercase letter, one lowercase letter, and be between 8 and 16 characters long.",
      });
    }

    const userExists = await Users.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashPassword = await hashString(password);  // Hash the validated password
    const user = new Users({
        username,
        email,
        password: hashPassword,
        role,
        companyName,
    });
    await user.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "Please fill all fields" });
    }
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }
    const passwordMatch = await CompareString(password, user?.password);
    if (!passwordMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    const token = await createJWT(user?.id,user.role);

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user,
      token,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
export const logout = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "User logged out" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
export const getUser = async (req, res) => {
  try {
    const user = await Users.findById(req.userData.userId).select('-password');
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
export const updateUser = async (req, res) => {

  try {
    const user = await Users.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    const { username, email, role, companyName } = req.body;
    if (username) user.username = username;
    if (email) user.email = email;
    if (role) user.role = role;
    if (companyName) user.companyName = companyName;
    await user.save();
    res.status(200).json({ success: true, message: "User updated" });
  }
  catch (err) {
    res.status(500).json({ msg: err.message });
  }
}
export const deleteUser = async (req, res) => {
  try {
    const user = await Users.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    await user.deleteOne();
    res.status(200).json({ success: true, message: "User deleted" });
  }
  catch (err) {
    res.status(500).json({ msg: err.message });
  }
}