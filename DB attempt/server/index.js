import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../my-app/src/App';
import reportWebVitals from '../my-app/src/reportWebVitals';

const express = require("express");
const mysql = require("mysql");

const bcrypt = require('bcrypt');
const saltRounds = 10

const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());


const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "LoginSystem",
});

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    bcrypt.hash(password, saltRounds, (err, hash) => {
  
        if (err) { 
        console.log(err);
        }

        db.query(
            "INSERT INTO users (username, password) VALUES (?,?)",
            [username, hash],
            (err, result) => {
               console.log(err);
            }
        );
    })
    
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ?;",
        username,
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }

            if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, result) => {
          if (response) { 
              req.session.user = result;
            
              const id = result[0].id;
              const token = jwt.sign({id}, "Secret",  );

              res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
      });
 } else {
     res.send({ message: "User doesn't exist!" });
     }
   }
 );
});

app.listen(3001, () => {
    console.log("running server");
});