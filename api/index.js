import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './route/user.route.js';
import authRoutes from './route/auth.route.js'
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
        console.log('MongoDb is connected')
    }).catch((err) =>{
        console.log(err);
    });

const app = express();
// allow to send json to the backend
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000!')
});

app.use('/api/user', userRoute);
app.use('/api/auth', authRoutes);
