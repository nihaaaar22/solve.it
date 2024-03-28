app.use((req,res)=>{
    res.status(404)
    res.sendFile(path.join(__dirname,'./Public/404.html'))

})