const express = require('express');
const app = express();
const db = require("./utils/db-connection.js");
const studentRoutes = require("./routes/studentsRoute.js");
const userRoutes = require("./routes/usersRoute.js");
const busRoute = require("./routes/busRoute.js");

app.use(express.json());


app.get('/', (req, res)=>{
    res.send("Hello World!");
});

app.use('/students', studentRoutes);
app.use('/users', userRoutes);
app.use('/buses', busRoute);

app.listen(3000, ()=> console.log('Server Started!'));