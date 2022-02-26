import User from '../../models/user';

const bcrypt=require('bcryptjs')
const config=require('config')
const jwt = require("jsonwebtoken");


const login= async (req, res) => {



 const { email, password }=req.body;

   //simple validation
   if(!email || !password){ 
     return res.status(400).json({msg:'plz enter all fieleds'})
   }
   //check for existing user
  User.findOne({email})
  .then(user=>{
    if(!user) return res.status(400).json({msg:'user does not exist'})

 //validate password
 bcrypt.compare(password,user.password) //comparision entre le mot de passe tapè et le mot de passe dans la base hashè
 .then(isMatch =>{
   if(!isMatch) return res.status(400).json({msg:'Invalid password'})
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
             role:user.role
           }
         }

         )
  }
)
 })

  })







  } 
  export default login;