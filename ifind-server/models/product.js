const db = require('../util/database');

module.exports = class Products {
  constructor(title, body, user) {
    this.title = title;
    this.body = body;
    this.user = user;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM Products');
  }

  static save(Products) {
    return db.execute(
      'INSERT INTO Products (title, description, user) VALUES (?, ?, ?)',
      [Products.title, Products.description, Products.user]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM Products WHERE id = ?', [id]);
  }
};
