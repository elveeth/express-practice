const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route('/') // campsites route specified in server.js
.all((req, res, next) => { // route already set in line above, so only need callback
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => { // route already set, so only need callback
    res.end('If we turn from battle because there is little hope of victory, where then would valor be?');
})
.post((req, res) => { // route already set, so only need callback
    res.end(`Will add the campsites: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {  // route already set, so only need callback
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => { // route already set, so only need callback
    res.end('Deleting all campsites');
});

module.exports = campsiteRouter;