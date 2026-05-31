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
    
    const usersTableQuery = `
    CREATE TABLE IF NOT EXISTS Users(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(20),
        email VARCHAR(20)
    )`;

    const busTableQuery = `CREATE TABLE IF NOT EXISTS Buses(
        id INT AUTO_INCREMENT PRIMARY KEY,
        busNumber INT,
        totalSeats INT,
        availableSeats INT
    )`;
    const bookingTableQuery =`CREATE TABLE IF NOT EXISTS Bookings(
        id INT AUTO_INCREMENT PRIMARY KEY,
        seatNumber INT
    )`;

    const paymentsTableQuery = `CREATE TABLE IF NOT EXISTS Payments(
        id INT AUTO_INCREMENT PRIMARY KEY,
        amountPaid INT,
        paymentStatus VARCHAR(20)
    )`;
    const studentsTableQuery = ` CREATE TABLE IF NOT EXISTS Students(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(20),
        email VARCHAR(30)
    )`
    connection.execute(studentsTableQuery, (err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log("Students Table Created!");
    })
    connection.execute(usersTableQuery, (err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log("Users Table Created!");
    });
    connection.execute(busTableQuery, (err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log("Buses Table Created!");
    });
    connection.execute(bookingTableQuery, (err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log("Bookings Table Created!");
    });
    connection.execute(paymentsTableQuery, (err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log("Payments Table Created!");
    });

});

module.exports = connection;