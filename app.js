const express = require('express');
const app = express();

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Sid2444',
    database:'testdb',
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Connection Successfull!!");
    
    const creationQuery = `create table Students(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(20),
        email VARCHAR(20)
    )`
    connection.execute(creationQuery, (err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log("Table Created!");
    });

});



app.get('/', (req, res)=>{
    res.send("Hello World!");
});

app.listen(3000, ()=> console.log('Server Started!'));