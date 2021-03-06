import User from '../../models/user';

const bcrypt=require('bcryptjs')
const config=require('config')
const jwt = require("jsonwebtoken");








const register = async (req, res) => {

const {name, email, password,role }=req.body;


 if(!name|| !email || !password)
 {
  return res.status(400).json({msg:'plz enter all fieleds'}) 
 }
 User.findOne({email}).then(user=>{
   if(user) return res.status(400).json({msg:'user alredy exist'})
const newUser= new User({      //create new User
  name,
  email,
  password,
  role:role || "client"
});
bcrypt.genSalt(10,(err,salt)=>{
  bcrypt.hash(newUser.password,salt,(err,hash)=>{

     if(err) throw err;
   newUser.password=hash;
     newUser.save()
      .then(user =>{
         jwt.sign(

             {id:user.id },
  config.get('jwtSecret'),
  {expiresIn:3600},
   (err,token)=>{
      if(err) throw err;
      res.json({
         token,
           user:{
             id:user.id,
             name:user.name,
             email:user.email,
             password:user.password,
             role:user.role
           }
      })
   }
         )
      })
  })
})
 })

  } 
  export default register;