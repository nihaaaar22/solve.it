const mongoose = require('mongoose');
const uri = "mongodb+srv://nihar:<password>@demo-cluster.asiznnf.mongodb.net/SolveIt?retryWrites=true&w=majority&appName=demo-cluster";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const user = require('./user');

function register(username,password){


  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
      mongoose.connect(uri, clientOptions)
        .then((result)=>{console.log("database connection successful")})
        .then(()=>{
          let newUser = new user.User({
            username:username,
            password:password
          }

          )

          newUser.save()
                 .then((result)=>{
                  console.log(`insertion of ${username} successful`)
                  mongoose.disconnect()
                  console.log("database disconnected")
                  
                 })
                 .catch((err)=>{console.log(err)
                  mongoose.disconnect()
                  console.log("database disconnected")})

          
        })
        .catch((err)=>{console.log(err)});
    
    
  } 
  catch(error){
    console.log(error);
  }
}

module.exports = {register,uri,clientOptions};


