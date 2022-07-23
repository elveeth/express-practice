const express = require('express');
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter'); // essentially an import for campsiteRouter.js
const promotionRouter = require('./routes/promotionRouter');
const partnerRouter = require('./routes/partnerRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/campsites', campsiteRouter); // use root path here, which is why not need to specify in campsiteRouter.js
app.use('/promotions', promotionRouter);
app.use('/partner', partnerRouter);


app.use(express.static(__dirname + '/public')); // serve static files from public folder

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});