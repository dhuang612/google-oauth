const express = require('express');
//const passportConfig =
require('./services/passport');

const app = express();

//const authRoutes = require('./routes/authRoutes')(app); because authRoutes is returning a function
//we can call the require statement and give it app
require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT);
