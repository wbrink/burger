const orm = require("../config/orm");


const burger = {
  selectAll: function(cb) {
    orm.selectAll("*", "burger", (results) => {
      cb(results);
    })
  }
}



module.exports = burger;