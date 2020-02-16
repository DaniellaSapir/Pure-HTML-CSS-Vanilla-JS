const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//serve static pages
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "workiz"
});

//API
app.post('/data', function(req, res){
    console.log(req.body);
    let query = "INSERT INTO `leads` (name, email, phone, comment, workshop) VALUES (?, ?, ?, ?, ?)";
    let values = [req.body.name, req.body.email, req.body.phone, req.body.comment, req.body.workshop];
    connection.query(query, values ,(err, result) => {
        if(err) throw err;
        res.send('Thank you for registering!');
    });
});



