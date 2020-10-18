const db = require('../database');

function getProducts() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM products;';
        db.conn.query(query, (error, rows) => {
            if (error) {
                return reject(error);
            }
            return resolve(rows);
        });
    });
}

module.exports = {
    getProducts: getProducts
};