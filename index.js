const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hhj:qwer1235@boilerplate-jpf1v.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
    .then(() => console.log('mongoDB connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('hello wolrd!'));

app.listen(port, () => console.log(`서버 시작! ${port}`));