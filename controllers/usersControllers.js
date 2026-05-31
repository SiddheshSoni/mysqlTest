const db = require('../utils/db-connection');
const errResponse = require('../utils/erroResp');

const addUser = (req, res)=>{

    const {name, email} = req.body;

    const addUserQuery = ` INSERT INTO Users (name, email) VALUES (?,?)`;

    db.execute(addUserQuery, [name, email], (err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }

        res.status(200).send("user added!");
    })

};

const getUser = (req, res)=>{
    const getUsersQuery = `SELECT * FROM Users`;
    db.execute(getUsersQuery, (err, result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }
        console.log(result);
        res.status(200).send("got all user info!");
    })
};

module.exports = {
    addUser,
    getUser,
}