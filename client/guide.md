Creating Blog Post

Following: 

install the Vite and tailwind

1. npm create vite@latest
2. npm install -D tailwindcss postcss autoprefixer
3. npx tailwindcss init -p
// Configure your template paths
4. /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

5. Add the Tailwind directives to your CSS

@tailwind base;
@tailwind components;
@tailwind utilities;

// Creating Page 

1. Setup react router

// Creating Header and install flowbite-react

1. Create Header Components 
2. npm i flowbite-react
3. setup header

// Create and run the server 

1. install express
2. add api folder
3. Setup index.js
4. add module in the package json
5. install nodemon
6. add script in the package json "dev": "nodemon api/index.js"
7. add script in the package json "start": "node api/index.js"

// connect to database

1. npm install mongoose
2. go to mongodb
3. create database
4. set mognoose 
  import mongoose from 'mongoose';

  mongoose.connect(
      'mongodb+srv://kingz:kingz@mern-blog.kw3iqy0.mongodb.net/mern-blog?retryWrites=true&w=majority'
      ).then(() => {
          console.log('MongoDb is connected')
      }).catch((err) =>{
          console.log(err);
      });
5. add dotenv

// create models

1. create a file could user.models.js
2. defined the rules of user Schema
   const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
  }, {timestamps: true}
  ); 
3. User Models 
   const User = mongoose.model('User', userSchema);
   export default User;

// Create a test API Route

1. create a route folder and user.route.js
   import express from 'express';

  const router = express.Router();

  router.get('/test', (req, res) => {
      res.json({message: 'API is working'})
  })

  export default router;
2. use and get api
3. create a controller and user.controller.js
   export const test = (req, res) => {
    res.json({message: 'API is working'});
   };
// Create sign up API route

1. create auth.route.js in route folder
2. set up auth.route.js
3. create auth.controller.js in controller folder
4. import auth.controller.js into auth.route.js
5. then add to index.js
6. API test in insomia 
   1. go to insomia
   2. create collection
   3. create a folder could auth
   4. create http request signup
   5. set it to post
   6. send from the body
   7. set into json
   8. create a body request to api 
      {
        "username": "user1",
        "email": "king@gmail.com",
        "password": "king"
      }
  9. allow the json in the backend from insomia
     app.use(express.json());
7. get the req data from the front end body
8. restructure the auth.controller.js
9. put extra security in the form
   if(!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({message: 'All fields are required'});
   }
10. create new user
    const newUser = new User({
        username,
        email,
        password,
    });
11. and saved 
    await newUser.save();
    res.json('Sign-up Successfully)
12. add trycatch
    try {
        await newUser.save();
        res.json('Sign-up successful')
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
13. hash the password for security
14. install bcryptjs

// create middleware and function for error handling

1. create middleware to index.js
   app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
    });
2. use it to auth.controller.js "next";
3. create a folder utils and file error.js
4. create function inside the error.js
   export const errorHandler = (statusCode, message) => {
    const error = new Error()
    error.statusCode = statusCode
    error.message = message
    return error;
  };
5. use it into auth.controller.js 
   next(errorHndler(400, 'All Field i Required'));

// create a signup page UI and add functionality

1. create signup ui with flowbite and style it.

   
2. get data from the form using handleChange function
3. create state for the sign up form, and track the id;
   state with empty object 
4. create a handleSubmit in the form to submit the data 
5. add proxy in vite to target the api
6. create loading and errorMessage state
7. create a error if the user input a same credintials
8. 
//
