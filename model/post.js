const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        uid:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        },
        location:{
            type:String,
            required:true
        }
        

    },{timestamps:true}
)
const post = mongoose.model('Post',postSchema)

new post({
    uid:""
})