const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    database: conf.database
});
connection.connect();

const multer = require('multer');
const upload = multer({des: './upload'});

app.get('/api/customers', (req, res) => {
    connection.query(
        "SELECT * FROM customer",
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.use('image', express.static('./upload'));

app.post('/api/customer', upload.single('image'), (req, res) => {
    let sql = 'INSERT INTO customer VALUES(null, ?, ?, ?, ?, ?)';
    let name = req.body.userName;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;
    let params = [null, name, birthday, gender, job];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    )
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});