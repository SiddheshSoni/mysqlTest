const express = require('express');
const app = express();
var cors = require('cors');
const db = require("./utils/db-connection.js");
const userRoutes = require("./routes/usersRoute.js");
const busRoute = require("./routes/busRoute.js");
const bookingRoute = require("./routes/bookingRoute.js");
require('./models/associations.js');

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    res.send("Hello World!");
});

app.use('/users', userRoutes);
app.use('/buses', busRoute);
app.use('/bookings', bookingRoute);

db.sync({alter:true}).then(()=>{
    app.listen(3000, ()=> console.log('Server Started!'));
}).catch((err)=>{
    console.log(err);
});