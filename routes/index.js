var express = require('express');
var router = express.Router();

bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/",(req,res)=>{
  const{username,password}=req.body;
  console.log("Username : ",username);
  console.log("Password : ",password);

  if(username=="astrodude" && password=="astrodude")
  {
    console.log(username);
    console.log(password);
    const result = Math.random().toString(36).substring(2,7);
    res.render("Panel",{passgen:result});
  }
  else
  {
    res.send("Login Failed Redirect to Login Page Re-Authentication");
  }
  console.log("Login Page");
});

module.exports = router;