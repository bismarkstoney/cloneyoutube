const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

dotenv.config({});
const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}
app.get('/', (req, res) => {
	res.send('Hello ');
});

module.exports = app;
// app.listen(PORT, () => console.log(`The server is running on ${PORT}`));
