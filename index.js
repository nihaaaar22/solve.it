// const http = require('http')
// const fs = require('fs')



// const server = http.createServer((req,res)=>{
//     fs.readFile('./Public/home.html',(err,data)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.write(data);

//         }
//         res.end();

//  })

// })
// server.listen(3000);

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const register = require('./model/register')

const post = require('./posts').posts;



//creating express instance 
const app = express();
app.use(bodyParser.json());

//register view engine
app.set('view engine','ejs')





app.use(express.static(path.join(__dirname,'/Public')))

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'./Public/about.html'))
})

app.get('/',(req,res)=>{
    // let post = [
    // {Username : "Sandeep",
    // Location: "Pimpri, Maharastra",Time: "14 mins ago",Text:"There is a huge road block on the national highway in front of wadia hospital. It is caused by an accident and needs immediate attention"}

    // ]
    // res.sendFile(path.join(__dirname,'./Public/home.html'))
    
    res.render('home',{post:post});


})

app.post('/register',(req,res) => {
    
    const { username, password } = req.body;
    if(!username||!password){
        res.status(400);
        res.end();
    }

    console.log(username);
    console.log(password);
    register.register(username,password);
    res.end();


})

//app.use is executed if none of the api is called. It has to be in the end of the file
app.use((req,res)=>{
    res.status(404)
    res.sendFile(path.join(__dirname,'./Public/404.html'))

})

app.listen((3000))
