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

app.get('/api/customers', (req, res) => {
    connection.query(
        "SELECT * FROM customer WHERE isDeleted = 0 ORDER BY id DESC LIMIT 5",
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.post('/api/customer', (req, res) => {
    let sql = 'INSERT INTO customer VALUES(null, ?, ?, ?, ?, 0, now())';
    let name = req.body.userName;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;
    let params = [name, birthday, gender, job];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    )
})

app.delete('/api/customer/:id', (req, res) => {
    let sql = 'UPDATE customer SET isDeleted = 1 WHERE id = ?';
    connection.query(sql, [req.params.id],
        (err, rows) => {
            res.send(rows);
        }
    )
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});