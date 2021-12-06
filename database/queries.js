const db = require('./index');

var getFavorites = function(callback) {
  queryString = 'SELECT exercise_id FROM Favorites'
  db.query(queryString, (err, response) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response);
    }
  })
}

var addToFavorites = function(exerciseId, callback) {
  queryString = 'INSERT INTO Favorites (exercise_id) VALUES (?)'
  db.query(queryString, exerciseId, (err, response) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response);
    }
  })
}

var removeFromFavorites = function(exerciseId, callback) {
  queryString = 'DELETE FROM favorites WHERE exercise_id = (?)'
  db.query(queryString, exerciseId, (err, response) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response);
    }
  })
}

module.exports = {
  getFavorites,
  addToFavorites,
  removeFromFavorites
}