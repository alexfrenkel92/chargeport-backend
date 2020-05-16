'use strict';

const app = require('./app/routes.js');
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

module.exports = app;
