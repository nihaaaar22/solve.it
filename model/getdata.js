const mongoose = require('mongoose');
const user = require('./user').User;

const uri = "mongodb+srv://nihar:<password>@demo-cluster.asiznnf.mongodb.net/?retryWrites=true&w=majority&appName=demo-cluster";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };



function isauth(username,password){
try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
      mongoose.connect(uri, clientOptions)
        .then((result)=>{console.log("database connection successful")})
        .then(()=>{

          user.find({username:username})
              .then(
                (user)=>{
                
                    JSON.stringify(user)})

              .then((user)=>{
                if(user){
                console.log(`username : ${user.username}, pwd: ${user.password}, id : ${user._id}`)}
                else{console.log(`no user with the username`)}
                mongoose.disconnect();
                console.log("db disconnected");
                
              })

          
        })
        .catch((err)=>{console.log(err)});
    
    
  } 
  catch(error){
    console.log(error);
  }
}
isauth('asdf','shetty');