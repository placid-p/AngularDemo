var express = require('express');
var userModel = require('../models/user');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   var userDetails = new userModel({
//     name: 'manali',
//     email: 'manali@',
//     password: '123',
//   });

//   userDetails.save(function(err,req1){
//     if(err) throw err;
//     res.render('index',{title:'inserted'});
//   })
  
// });

router.post('/signin', (req, res)=> {

  var userDetails = new userModel({
    name:req.body.Name,
    email: req.body.Email,
    password: req.body.Password
     
  })
try{
  const datatosave=userDetails.save();
  res.status(200).json(datatosave)
}
catch(error){
  res.status(400).json({message: error.message})
}

});

// router.post('/signin',(req,res)=>{
//   console.log(req.body);
//   var udata=req.body;
//   var user1=new userModel(req.body);
//   console.log(user1);
//   user1.save((error,result)=>{
//     if(error)
//       console.log(udata)
//     console.log("saved");
//     res.sendStatus(200);
//   })
// });



module.exports = router;
