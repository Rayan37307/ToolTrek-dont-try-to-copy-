import bcrypt from 'bcryptjs'
import {User} from '../models/userModel.js'
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'
dotenv.config();
export const loginController = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        res.status(400);        
        throw new Error("fill in the required fields")
    }
    
    const user = await User.findOne({email});


    if(user && (await bcrypt.compare(password, user.password))) {        
        res.send(user)
        res.status(200)
    }
    if(!user) {
        res.status(403);
        throw new Error("Invalid email or password")
    }
    // const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
    // res.cookie('jwt', token, { httpOnly: true }); // 1 hour
}