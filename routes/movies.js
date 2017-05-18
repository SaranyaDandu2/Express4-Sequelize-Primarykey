var express = require('express');
var router=express.Router();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('hurryup', 'root', 'saranya123',{
	host:"127.0.0.1",
	port:3306,
	dialect:"mariadb"
})
 
 

var User = sequelize.define('table1', {
  "title": Sequelize.STRING,
 "director" :Sequelize.STRING,
  "genre": Sequelize.STRING
},{timestamps:false});

router.post('/u',function(req,res,next){

 User.create({"id":req.body.id,"title":req.body.title,"director":req.body.director,"genre":req.body.genre}).  
    then(function(jane) {  
        res.json(jane);  
    }, function(error) {  
        res.send(error);  
    });  
});

var Post = sequelize.define('table2', {
  "title": Sequelize.STRING,
 "review" :Sequelize.STRING,
  "hero": Sequelize.STRING
  
},{timestamps:false});

router.post('/p',function(req,res,next){

 Post.create({"id":req.body.id,"title":req.body.title,"review":req.body.review,"hero":req.body.hero}).  
    then(function(jane) {  
        res.json(jane);  
    }, function(error) {  
        res.send(error);  
    });  
});

//User.hasMany(Post, {foreignKey: 'id'})
Post.belongsTo(User, {foreignKey: 'id'})


router.get('/:id',function(req,res,next){
	console.log("hi")
	Post.find({
		where:{
			id: req.params.id
		},include:[User]
	}).then(function(jane) {  
        res.json(jane);  
    }, function(error) {  
        res.send(error);  
    });  
});


module.exports = sequelize;
module.exports = User;
module.exports=Post;
module.exports = router;
