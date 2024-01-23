import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    // add extra security in the form
    if(!username || !email || !password || username === '' || email === '' || password === '') {
        next(errorHandler(400, 'All Field is Required'))
    }

    const hashedPassword = bcryptjs.hashSync(password, 10)
    
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });
    
    try {
        await newUser.save();
        res.json('Sign-up successful')
    } catch (error) {
        next(error);
    }

}