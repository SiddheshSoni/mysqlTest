const Users = require('../modals/Users');

const addUser = async (req, res)=>{
    try{
        const {name, email, age} = req.body;
       
        const user = await Users.create({
            name, 
            email,
            age
        });

        res.status(200).send("Added new user successfully!");
    }catch(err){
        res.status(500).send("Failed to add user! Error: " +  err);
    }

};

const getUser = async (req, res)=>{
    try{
        const users = await Users.findAll();

        if(!users) res.status(404).send("No Users Record Found!");

        console.log(users);
        res.status(200).send("got all user info!");
    }catch(err){
        res.status(500).send("Failed to get users table! Error: " +  err);
    }
};

module.exports = {
    addUser,
    getUser,
}