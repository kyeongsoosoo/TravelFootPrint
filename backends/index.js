const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: '*', // 모든 요청 허용
    origin: true, // 들어오는 요청 도메인/포트가 자동으로 origin에 삽입된다.
    credentials: true, // 개발단계에서는 false, 실 서비스에서는 true
  }),
);

app.get('/', (req, res) => {
  res.send('Hi');
});
app.use('/api/map', require('./routes/map'));

app.listen(port, () => console.log(`listening to port: ${port}`));
