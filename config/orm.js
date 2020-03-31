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
  },

  update: function(tableName, setValues, whereValues, cb) {
    let sql = "UPDATE ?? SET ? WHERE ?";
    let placeholder = [tableName, setValues, whereValues];
    const query = connection.query(sql, placeholder, (error, results) => {
      if (error) {
        console.log(error);
        cb("error");
        return;
      }
      cb(results);
    })
    //console.log(query);
  },

  insert: function(tablename, insertValues, cb) {
    let sql = "INSERT INTO ?? SET ?";
    let placeholder = [tablename, insertValues];
    connection.query(sql, placeholder, (error, results) => {
      if (error) {
        console.log(error);
        cb("error");
      }
      cb(results);
    })
  },

  delete: function(tableName, whereValues, cb) {
    const sql = "DELETE FROM ?? WHERE ?";
    const placeholder = [tableName, whereValues];
    connection.query(sql, placeholder, (error, results) => {
      if (error) {
        console.log(error);
        cb("error");
      }
      cb(results);
    })
  }
}


module.exports = orm;