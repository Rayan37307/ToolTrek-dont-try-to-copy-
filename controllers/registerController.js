import {User} from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'
dotenv.config();
// controllers/registerController.js
export const registerController = async (req, res) => {
    const {name, email, password} = req.body;
    if(!email || !password || !name) {
        res.status(400);
        throw new Error("fill in the required fields")
    }
    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })
    res.status(200)
    // const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
    // res.cookie('jwt', token, { httpOnly: true }); // 1 hour
    // res.json({ user });
}