const express = require('express');
const app = express();
var cors = require('cors');
const db = require("./utils/db-connection.js");
const studentRoutes = require("./routes/studentsRoute.js");
const userRoutes = require("./routes/usersRoute.js");
const busRoute = require("./routes/busRoute.js");
const BusModels = require('./modals/Buses.js');

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    res.send("Hello World!");
});

app.use('/students', studentRoutes);
app.use('/users', userRoutes);
app.use('/buses', busRoute);

db.sync({force:true}).then(()=>{
    app.listen(3000, ()=> console.log('Server Started!'));
}).catch((err)=>{
    console.log(err);
});