const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hi');
});
// app.use('/api/map', require('./routes/map'));

app.listen(port, () => console.log(`listening to port: ${port}`));
