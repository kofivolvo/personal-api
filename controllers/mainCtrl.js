var user = require('../user.js')



module.exports = {
  getName: function(req, res, next) {
    res.status(200).json(user.name)
  },

  getLocation: function(req, res, next) {
    res.status(200).json(user.location)
  },

  getOccupation: function(req, res, next) {
    res.status(200).json(user.occupations)
  },
  getOccupationLatest: function(req, res, next) {
    res.status(200).json(user.occupations.slice(2))
  },
  getHobbies: function(req, res, next) {
    return res.status(200).json({Hobbies: user.hobbies})

  },

  getHobbieType: function(req, res, next){
    var type = req.params.type;
    var filtered = user.hobbies.filter(function(hobby){
      return hobby.type === type;
    })
    return res.status(200).json(filtered)
  },

  getFamily: function(req, res, next) {
    if (req.query.relation) {
      var relation = req.query.relation;
      var filtered = user.family.filter(function(apple){
        return apple.relation.toLowerCase() === relation;
      })
      return res.status(200).json(filtered)
    }else{
      return res.status(200).json(user.family)
    }
  },

  getFamilyGender: function(req, res, next){
   var gender = req.params.gender;
   var filtered = user.family.filter(function(fam){
     return fam.gender === gender;
   })
   res.status(200).json(filtered);
 },

  getRestaurants: function(req, res, next) {
    if(req.query.rating){
      var rating = req.query.rating;
      var filtered = user.restaurants.filter(function(sco){
        return sco.rating >= 2
      })
      return res.status(200).json(filtered)
    } else {
      return res.status(200).json(user.restaurants)
    }
  },

  getRestaurantsName: function(req, res, next) {
    var name = req.params.name;
    var filtered = user.restaurants.filter(function(req, res, next) {
      return restaurants.name.toLowerCase() === name;
    })
    return res.status(200).json(filtered);
  }


































}
