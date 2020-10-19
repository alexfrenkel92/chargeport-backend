const db = require('../database');

function postOrders(productId, productName, productPrice, productCount) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO orders (product_id, product_name, product_price, product_count) VALUES (?,?,?,?)';
        db.conn.query(query, [productId, productName, productPrice, productCount], (error, rows) => {
            if (error) {
                return reject(error);
            }
            return resolve(rows);
        });
    });
}

function getOrders() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM orders';
        db.conn.query(query, (error, rows) => {
            if (error) {
                return reject(error);
            }
            return resolve(rows);
        });
    });
}

module.exports = {
    postOrders: postOrders,
    getOrders: getOrders
};