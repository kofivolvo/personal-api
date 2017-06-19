var express = require('express');
var bodyParser = require('body-parser')
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(middleware.addHeaders);



module.exports = {
  getMiddleWare: function(req, res){

  },
  getMainCtrl: function(req, res){

  }
};


app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupation);
app.get('/occupations/latest', mainCtrl.getOccupationLatest);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbieType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('restaurants/:name', mainCtrl.getRestaurantsName);















app.listen(3002, function(){
  console.log('Ayyy Port 3002 Lit, It Really Is Tho');
})
