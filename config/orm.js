const connection = require("./connection");

// orm page

const orm = {
  selectAll: function(selection, tableName, cb) {
    let sql = "SELECT ?? FROM ??";
    const placeholder = [selection, tableName];
    connection.query(sql, placeholder, (error, results) => {
      if (error) {
        cb("error"); // will need to transform into 500 error when it reaches controller
        return;
      }
      cb(results)
    })
  }
}


module.exports = orm;