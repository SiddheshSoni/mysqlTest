const db = require('../utils/db-connection');
const errResponse = require('../utils/erroResp');

const addBus = (req, res)=>{
    const {busNumber, totalSeats, availableSeats} = req.body;

    const getBusQuery = `INSERT INTO Buses (busNumber, totalSeats, availableSeats) VALUES (?,?,?)`;
    db.execute(getBusQuery,[busNumber, totalSeats, availableSeats], (err, result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }
        console.log(result);
        res.status(200).send("Added bus info!");
    })
};

const getAvailableSeats = (req, res)=>{
    const {id } = req.params;

    const getAvaiableSeatsQuery = `SELECT availableSeats FROM Buses WHERE id = ?`;
    db.execute(getAvaiableSeatsQuery,[id], (err, result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }
        console.log(result);
        res.status(200).send("got all bus info!");
    })
};


module.exports = {
    addBus,
    getAvailableSeats
}