const express = require('express');
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');


const User = require('../models/user');
const { hashpassword , comparepasswords } = require('../helpers/auth');


const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }
        req.user = decoded; // Store decoded user information in request object
        next();
    });
};


// middleware
router.use(
    cors({
        credentials:true,
        origin:'http://localhost:5173'
    })
)

router.get('/' , (req,res) => {
    res.send('working');
})

router.post('/register' , async(req,res) => {
    try {
        const {name,email,password} = req.body;
        if(!name){
            return res.json({
                error:'name is required'
            })
        };
        if(!password || password.length<6){
            return res.json({
                error:'password is required and should atleast 6 characters long'
            })
        };
        if(!email){
            return res.json({
                error:'email is required'
            })
        }
        const emailexist = await User.findOne({email});
        if(emailexist){
            return res.json({
                error:'user already exist'
            })
        }
        
        const hashedpassword = await hashpassword(password);

        // create user in database
        const user = await User.create({
            name,email,password: hashedpassword,
        })
        return res.json(user);
    } catch (error) {
        console.log(error);
    }
})

router.post('/login' , async(req,res) => {
    try {
        const {email,password} = req.body;

        // check if user exist or not
        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error : 'no user find'
            })
        }

        // check if password is match
        const match = await comparepasswords(password,user.password);
        if(match){
           jwt.sign({email:user.email , id:user._id , name:user.name} , process.env.JWT_SECRET , {} , (err,token) => {
              if(err) throw err;
              res.cookie('token' , token).json(user)
           })
        }
        else{
            return res.json({
                error:'Invalid password , Retry again'
            })
        }
    } catch (error) {
        console.log(error);
    }
})
router.delete('/logout', (req, res) => {
    if (req.session) {
      req.session.destroy(err => {
        if (err) {
          return res.json({
            error: 'unable to logout'
          })
        } else {
          res.send('Logout successful')
        }
      });
    } else {
      res.end()
    }
  })

router.get('/profile' , verifyToken, async(req,res) => {
    const {token} = req.cookies;
    if(token){
        jwt.verify(token,process.env.JWT_SECRET , {} , (err,user) => {
            if(err) throw err;
            res.json(user);
        })
    }
    else{
        res.json(null);
    }

    // const {user} = req.user;
    // res.json(user);
})


module.exports = router;