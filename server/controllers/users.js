const app = express.Router();
const village = "New Paltz, NY 12561";

app
    .get('/', (req, res) => {
      res.send([
        {name: "Moshe", age: 50},
        {name: "Robert", age: 21}
      ]);
    })
    .get('/test', (req, res) => {
      res.send({
        name: "Test User",
        age: 50
      });
    });

module.exports = {
    app
};
