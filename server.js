const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

mongoose.connect('mongodb://localhost:27017/techysoftware', { useNewUrlParser: true, useUnifiedTopology: true });

const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const feedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    feedback: String
});

const Customer = mongoose.model('Customer', customerSchema);
const Feedback = mongoose.model('Feedback', feedbackSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post('/submit', (req, res) => {
    const newCustomer = new Customer({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    newCustomer.save((err) => {
        if (err) {
            res.send('Error saving data');
        } else {
            res.send('Data saved successfully');
        }
    });
});

app.post('/feedback', (req, res) => {
    const newFeedback = new Feedback({
        name: req.body.name,
        email: req.body.email,
        feedback: req.body.feedback
    });

    newFeedback.save((err) => {
        if (err) {
            res.send('Error saving feedback');
        } else {
            res.send('Feedback submitted successfully');
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
