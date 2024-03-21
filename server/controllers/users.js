const users = require('../models/users');
const app = express.Router();
const village = "New Paltz, NY 12561";

app
    .get('/', (req, res) => {
      const all = users.getAll();
      res.send(all);
    })
    .get('/test', (req, res) => {
      const testUsers = users.get(1);
      res.send(testUsers);
    });

module.exports = {
    app
};
