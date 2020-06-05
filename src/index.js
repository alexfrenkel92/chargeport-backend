'use strict';

const app = require('./app/routes.js');
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Works')
});

module.exports = app;
