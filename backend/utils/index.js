import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const hashString = async (userValue)=>{
    const salt= await bcrypt.genSalt(10);
    const hashPassword=bcrypt.hash(userValue,salt);
    return hashPassword;
}
export const CompareString = async (userPassword,password)=>{
    try{
        const isMatch=await bcrypt.compare(userPassword, password);
        return isMatch;
    }
    catch(err){
        console.log(err);
    }
}

export const createJWT=async(id,role)=>{
    return jwt.sign({userId:id,role:role},process.env.JWT_SECRET,{expiresIn:'1d'});
}


// Generate a 6-digit OTP
export const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};
// Send OTP via email (using nodemailer)
export const sendOTPEmail = async (email, otp) => {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}. It is valid for 10 minutes.`,
    };
  
    await transporter.sendMail(mailOptions);
  };