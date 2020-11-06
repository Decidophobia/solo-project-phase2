const app = require('express')();
const middleware = require('./middleware/index');
const generalRouter = require('./routes/index');

middleware(app);
app.use('/', generalRouter);


module.exports = app;
