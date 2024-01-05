const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();
const Router = require('./routes/alternative');


const app = express();
const port = process.env.PORT || 3000;


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Your existing routes
app.use('/food', Router);
app.use('/settingstable', Router);
app.use('/auth', authRoutes);


// Additional routes can be added here


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});