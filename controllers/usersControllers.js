const Users = require('../models/Users');

const addUser = async (req, res)=>{
    try{
        const {name, email } = req.body;
       
        const user = await Users.create({
            name, 
            email
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
        res.status(200).json(users);
    }catch(err){
        res.status(500).send("Failed to get users table! Error: " +  err);
    }
};

const getUserBookings = async (req, res) => {
    try {
        const userId = req.params.id;

        const bookings = await Bookings.findAll({
            where: {
                userId: userId
            },
            include: [
                {
                    model: Buses,
                    attributes: ['busNumber']
                }
            ]
        });

        res.status(200).json(bookings);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

const deleteUser = async(req, res)=>{
    try{
        const {id} = req.params;
         
        const users = await Users.destroy({
            where:{
                id
            }
        })

        res.status(200).send("deleted user successfully!")
    }catch(err){
        res.status(500).send("Unable to delete user!")
    }
}

module.exports = {
    addUser,
    getUser,
    getUserBookings,
    deleteUser,
}