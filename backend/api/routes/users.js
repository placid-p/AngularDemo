var express = require('express');
var userModel = require('../models/user');
var router = express.Router();
const bcrypt = require('bcrypt');
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

// router.post('/signin', (req, res)=> {

//   var userDetails = new userModel({
//     name:req.body.Name,
//     email: req.body.Email,
//     password: req.body.Password
     
//   })
// try{
//   const datatosave=userDetails.save();
//   res.status(200).json(datatosave)
// }
// catch(error){
//   res.status(400).json({message: error.message})
// }

// });


router.post('/signin', function(req, res, next) {
  bcrypt.hash(req.body.Password, 10, function(err, hash) {
    if(err){
      res.status(400).json({
            msg:"Something Wrong, Try Later!",
            results:err
        });
    }
    else{
  var userDetails = new userModel({
    name:req.body.Name,
    email: req.body.Email,
    password: hash
     
  })
try{
  const datatosave=userDetails.save();
  res.status(200).json(datatosave)
}
catch(error){
  res.status(400).json({message: error.message})
}
}

});
});


router.post("/signup",function(req,res,next){

  var email=req.body.Email;
  userModel.find({email:email})
  .exec()
  .then(user=>{
      if(user.length<1){
          res.status(200).json({
            msg:"Auth Failed1",
            UserData:'',
            status:'error'
          });
      }else{
          bcrypt.compare(req.body.Password, user[0].password, function(err, result) {
             if(err){
              res.json({
                msg:"Auth Failed2",
                UserData:'',
                status:'error'
              });
             }
             if(result){
              res.status(200).json({
                msg:"User Login Successfully",
                  UserData:user,
                  status:'success'
              });
             }else{
              res.json({
                msg:"Auth Failed3",
                UserData:'',
                status:'error'
              });
             }
          });
      
  }
  })
  .catch(err=>{
      res.json({
          error:err
      });
  })


  });


module.exports = router;
