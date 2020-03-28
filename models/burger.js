const orm = require("../config/orm");


const burger = {
  selectAll: function(cb) {
    orm.selectAll("*", "burgers", (results) => {
      cb(results);
    })
  }
}



module.exports = burger;