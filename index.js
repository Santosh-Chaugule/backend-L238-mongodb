// console.log("mongoDB")

//const something =require('somelibrary')
const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv').config();

async function main() {
    //every function return something
    await mongoose.connect('mongodb+srv://santosh:Santosh1993@cluster0.mczqiac.mongodb.net/?retryWrites=true&w=majority')
}

//po.then().catch((err)=>{})
main().catch(err => console.log(err))




let port = process.env.PORT || 6000;
app.listen(3000, () => {
    console.log('the server is running on' + port)
})