const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static("views"));

const emaildb = "sajarmohammed71@gmail.com";
const passworddb = "123";

app.post("/login",(req,res) => {
   const {email, password} = req.body;

    if(email===emaildb && password===passworddb){
       res.send("login successfull")
    }else{
      res.send("login failed")
    }
});

const PORT = process.env.PORT || 3009;


app.listen(PORT);



