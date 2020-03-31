const orm = require("../config/orm");


const burger = {
  selectAll: function(cb) {
    orm.selectAll("*", "burger", (results) => {
      cb(results);
    })
  },

  update: function(setValues, whereValues, cb) {
    orm.update("burger", setValues, whereValues, (results) => {
      cb(results);
    })
  },

  insert: function(insertValues, cb) {
    orm.insert("burger", insertValues, (results) => {
      cb(results);
    })
  },

  delete: function(whereValues, cb) {
    orm.delete("burger", whereValues, cb); // just realized i don't need the anonymous function just use cb given from controller
  }
}



module.exports = burger;