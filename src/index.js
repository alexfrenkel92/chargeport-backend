'use strict';

const app = require('./app/routes.js');
// const PORT = 8080;
const PORT = 'https://chargeport-backend.herokuapp.com/'

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
