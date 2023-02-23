const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Purva:Purva%4021@cluster0.zhnvxnf.mongodb.net/Mydb?retryWrites=true&w=majority',{ useNewUrlParser: true });
//mongoose.set('strictQuery', false);
var conn = mongoose.Collection;

var userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
});

var userModel = mongoose.model('Users',userSchema);
module.exports=userModel;

