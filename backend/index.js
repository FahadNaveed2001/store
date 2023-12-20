const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const userController = require('./controller/user');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const atlasConnectionUrl = 'mongodb+srv://fahadshelby2001:C4yzHCuLUpQOEpNb@cluster0.bri3xyd.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(atlasConnectionUrl, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log('DB Connected.');
});

mongoose.connection.on('error', (err) => {
    console.error('DB Connection Error:', err);
});

app.post('/signup', userController.signup);
app.post('/signin', userController.signin);
app.post('/submit-otp', userController.submitotp);
app.post('/send-otp', userController.sendotp);

app.listen(5000, () => {
    console.log(`Backend Running At Port 5000`);
});
