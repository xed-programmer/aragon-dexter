import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Register a new user
const register = async (req, res) => {
    try{
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if(existingUser) return res.status(400).json({error: 'User already exists'});

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({name, email, password: hashedPassword});

        res.status(201)
        .json({message: 'User registered successfully'});
    }catch (err){
        res.status(500).json({error: 'Server error'});
    }
};

// Login an existing user
const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(404).json({error: 'User not found'});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ error: 'Invalid credentials'});

        // Generate a JWT (JSON Web Token) with the users id as payload
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h'});;
        res.status(200)
        .json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    }catch (err){
        res.status(500).json({error: 'Server error'});
    }
};

export {
    register,
    login
};