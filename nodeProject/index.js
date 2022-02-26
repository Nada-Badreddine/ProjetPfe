const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Product = require("./models/product");
const Favorite = require("./models/favorite");
const Category = require("./models/category");
const User = require("./models/user");
var cors = require("cors");
const auth=require('./middleware/auth')
app.use(cors());
const bcrypt=require('bcryptjs')
const config=require('config')
import routes from './routes';

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


routes(app);

app.get("/product", async function (req, res) {
  try{
    const produit = await Product.find();

    return res.json({ result: produit, status: 200 }).status(200);



  } catch (err){
    return res.json({ result: null, status: 500, error: err }).status(500);

  }
  
  });

  //GET all les favoris 

  app.get("/favoriteList", async function (req, res) {
  try{
    const Favoris = await Favorite.find();

    return res.json({ result: Favoris, status: 200 }).status(200);



  } catch (err){
    return res.json({ result: null, status: 500, error: err }).status(500);

  }
  
  
});



//get liste de favoris by userID 

app.get("/listFavoris/:user", async function (req, res) {
   try {
     
 const listFav = await Favorite.find({ user: req.params.user});
 
  return res.json({ message: "ok", status: 200, result: listFav }).status(200);
 
   } catch (err) {
     return res.json({ result: null, status: 500, error: err }).status(500);
	}
});


app.get("/product/:category", async function (req, res) {
   try {
     
 const produit = await Product.find({ category: req.params.category});
 
  return res.json({ message: "ok", status: 200, result: produit }).status(200);
 
   } catch (err) {
     return res.json({ result: null, status: 500, error: err }).status(500);
	}
});









// app.get("/category/:id", async function (req, res) {
//    try {
//   const categ = await Category.findOne({ _id: req.params.id });

//   return res.json({ message: "ok", status: 200, result: categ }).status(200);
//    } catch (err) {
//      return res.json({ result: null, status: 500, error: err }).status(500);
// 	}
// });

// app.get("/category", async function (req, res) {
//   try{
//     const categ = await Category.find();

//     return res.json({ result: categ, status: 200 }).status(200);



//   } catch (err){
//     return res.json({ result: null, status: 500, error: err }).status(500);

//   }
  
  
// });

app.delete("/Favproduct/:id", async function (req, res) {
  await Favorite.deleteOne({ProductId: req.params.id });
  return res
    .json({ message: "ok", result: req.params.id, status: 200 })
    .status(200);
});

app.delete("/product/:id", async function (req, res) {
  await Product.deleteOne({ _id: req.params.id });
  return res
    .json({ message: "ok", result: req.params.id, status: 200 })
    .status(200);
});


// app.delete("/category/:id", async function (req, res) {
//   await Category.deleteOne({ _id: req.params.id });
//   return res
//     .json({ message: "ok", result: req.params.id, status: 200 })
//     .status(200);
// });

app.get("/product/:id", async function (req, res) {
   try {
  const produit = await Product.findOne({ _id: req.params.id });

  return res.json({ message: "ok", status: 200, result: produit }).status(200);
   } catch (err) {
     return res.json({ result: null, status: 500, error: err }).status(500);
	}
});

app.post("/product",async function (req, res) {
	try {
    console.log("body",req.body)

		const produit = await Product.create(req.body);
		return res.json({ result: produit, status: 200 }).status(200);
	} catch (err) {
		return res.json({ result: null, status: 500, error: err }).status(500);
	}
  });

app.post("/favorite",async function (req, res) {
	try {
		const Favoris = await Favorite.create(req.body);
    console.log("body",req.body)
		return res.json({ result: Favoris, status: 200 }).status(200);
	} catch (err) {
		return res.json({ result: null, status: 500, error: err }).status(500);
	}
  });  



  // app.post("/category",async function (req, res) {
	// try {
	// 	const categ = await Category.create(req.body);
  
	// 	return res.json({ result: categ, status: 200 }).status(200);
	// } catch (err) {
	// 	return res.json({ result: null, status: 500, error: err }).status(500);
	// }
  // });










app.put("/product/:id", async function (req, res) {
  try {
   const produit = await Product.update({ _id: req.params.id}, req.body );
  return res.json({ message: "ok", status: 200, result: produit  }).status(200);
  } catch (err) {
    	return res.json({ result: null, status: 500, error: err }).status(500);
	}
});

app.put("/category/:id", async function (req, res) {
  try {
   const categ = await Category.update({ _id: req.params.id}, req.body );
  return res.json({ message: "ok", status: 200, result: categ  }).status(200);
  } catch (err) {
    	return res.json({ result: null, status: 500, error: err }).status(500);
	}
});
//add new user ***Register *****



app.post('/register', async function (req, res) {

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



});
//**login ****/

app.post('/auth', async function (req, res) {
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

  });


// Check if token is valid
app.post("/tokenIsValid", async (req, res) => {
try {
const token = req.header("x-auth-token");
if (!token) return res.json(false);
const verified = jwt.verify(token, process.env.JWT_SECRET);
if (!verified) return res.json(false);
const user = await User.findById(verified.id);
if (!user) return res.json(false);
return res.json(true);
} catch (err) {
res.status(500).json({ error: err.message });
}
});







app.get("/", auth, async (req, res) => {
const user = await User.findById(req.user);
res.json({
displayName: user.displayName,
id: user._id,
});
});





app.listen(4005, () => {
  mongoose.connect(`mongodb://localhost:27017/aa`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`🚀 application ready at 4005`);
});