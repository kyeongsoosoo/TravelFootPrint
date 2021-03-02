const { response } = require('express');
const express = require('express');
const router = express.Router();

const request = require('request');

const config = require('../config/key');

const options = coord => {
  return {
    url: `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${coord}`,
    headers: {
      'X-NCP-APIGW-API-KEY-ID': config.CLIENT_ID,
      'X-NCP-APIGW-API-KEY': config.CLIENT_SECRET,
    },
  };
};
const driveOptions = (start, goal) => {
  return {
    url: `https://naveropenapi.apigw.ntruss.com/map-direction/v1/driving?start=${start}&goal=${goal}`,
    headers: {
      'X-NCP-APIGW-API-KEY-ID': config.CLIENT_ID,
      'X-NCP-APIGW-API-KEY': config.CLIENT_SECRET,
    },
  };
};

router.get('/geocoding', (req, res) => {
  console.log(req.query.cord);
  const address = encodeURIComponent(req.query.cord);
  const geoOption = options(address);
  request.get(geoOption, (error, response, body) => {
    const data = JSON.parse(body);
    const address = data.addresses[0];
    return res.status(200).json(address);
  });
});
router.get('/driving', (req, res) => {
  const driveOption = driveOptions(req.query.start, req.query.goal);
  request.get(driveOption, (error, response, body) => {
    const data = JSON.parse(body);
    return res.status(200).json(data);
  });
});

module.exports = router;
