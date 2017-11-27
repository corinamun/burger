//import ORM.js in here
var orm = require("../config/orm.js");
// create code that will call the ORM functions using burger-specific input

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
//columns and values are arrays
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// export the database functions for the controller (burgers_controller.js).
module.exports = burger;
