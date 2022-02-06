const express = require('express');
const app = express();
const Controller = require("./src/controller/controller");

app.listen(8008)

app.get('/findService', (req, res) => {
    const search = req.query.search;
    const lat = req.query.lat;
    const lng = req.query.lng

    if (!(search && lat && lng))
        res.send('Please submit service name, and position of service')
    try {
        const matchingServices = new Controller().findMatchingServices(search.toLowerCase(), lat, lng);
        res.send(matchingServices);
    } catch (e) {
        res.send(e);
    }

});
