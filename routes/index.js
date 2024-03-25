var express = require('express');
var router = express.Router();

bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/login",(req,res)=>{
  res.render(login);
});

router.post("/login",(req,res)=>{
  const{username,password}=req.body;
  console.log("Username : ",username);
  console.log("Password : ",password);

  if(username=="nikhilesh" && password=="Brave222#")
  {
    res.render("Panel");
  }
  else
  {
    res.send("Login Failed Redirect to Login Page Re-Authentication");
    
  }

  console.log("Login Page");
});

module.exports = router;
