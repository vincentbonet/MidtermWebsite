const express = require('express');
const users = require('./controllers/users');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send( users.hello );
})
.use('/users', users);

app.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});
