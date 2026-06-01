const Buses = require("../modals/Buses");


const addBus = async (req, res)=>{
    try{
        const {busNumber, totalSeats, availableSeats} = req.body;

        const bus = await Buses.create({
            busNumber,
            totalSeats,
            availableSeats
        });

        res.status(200).send("Added Bus Successfully!");
    }catch(err){
        res.status(500).send('Failed adding bus! Error:'+ err);
    }
};

const getAvailableSeats = async (req, res)=>{
    try{
        const {id } = req.params;
        const bus = await Buses.findByPk(id);

        if(!bus){
            return res.status(404).send("No bus fround with id: " + id);
        }

        console.log(bus);
        res.status(200).send("Got Available seats details!");
        
    }catch(err){
        res.status(500).send("Failed getting bus details");
    }
};


module.exports = {
    addBus,
    getAvailableSeats
}