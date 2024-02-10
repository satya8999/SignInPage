const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const detailModel = require('./Models/contact');

const app = express();
app.use(express.json());
app.use(cors());


const dbUrl = "mongodb+srv://satya:satya123@cluster0.wbhchpa.mongodb.net/profileDB?retryWrites=true&w=majority";

// const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(dbUrl).then(()=>{console.log("Connected to Database");}).catch((err)=>{console.log("Failed to connect: " + err);});

app.post("/register", function(req, res){
    detailModel.create(req.body)
    .then(details=>res.json(details))
    .catch(err=>res.json(err));
});
app.post("/login", function(req, res){
    const {email, password} = req.body;
    detailModel.findOne({ email: email })
    .then(function(user){
        if(user)
        {
            if(user.password === password){
                res.json(user);
            }
            else{
                res.json(null);
            }
        }
    })
    .catch(err=> {res.json("Failed to login:" + err)} );
});

app.listen(3001,function(){
    console.log("Server listening on 3001");
});
