var express = require('express');
var router = express.Router();
var userModel = require('../Models/User');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/add', function(req, res, next) {
  res.render('Add', { title: 'Express' });
});

router.post('/add', function(req, res, next){
  var bodydata = {
    name: req.body.txt1,
    mobile: req.body.txt2,
    email: req.body.txt3,
    password: req.body.txt4
  }
  var mydata = userModel(bodydata);
  mydata.save();
  res.send("record added");
});

// router.get('/display', function(req, res, next){
//   userModel.find().then(data=>{console.log(data)}).catch(err=>console.log("error"+err));
// });

router.get('/display', function(req, res, next){
  userModel.find().then(data =>{
    console.log(data);
    res.render('display', {mydata:data});
  }).catch(err=>console.log("Error" +err));
});

router.get('/show/:id', function(req, res, next){
  var myid = req.params.id;

  userModel.findById(myid).then(data=>{
    res.render("show",{mydata:data}).catch(err=>console.log("error"+err))
  })

});

router.get('/delete/:id', function(req, res, next){
  var myid = req.params.id;
  userModel.findByIdAndDelete(myid).then(data=>{
    res.redirect('/display');
  }).catch(err=> console.log("error"+err));
});

router.get('/edit/:id', function(req, res, next){
  var myid = req.params.id;

  userModel.findById(myid).then(data=>{
    res.render("edit",{mydata:data});
  }).catch(err=>console.log("error"+err));

});

router.post('/update/:id', function(req, res, next){
  var myid = req.params.id;
  var mydata ={
    name: req.body.txt1,
    mobile: req.body.txt2,
    email: req.body.txt3
  }
  userModel.findByIdAndUpdate({_id:myid},mydata).then(data=>{
    res.redirect('/display');
  }).catch(err=> console.log("error"+err));
});

module.exports = router;

