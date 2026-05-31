const db = require('../utils/db-connection');


const addEntries = (req, res) =>{
    const {name, email} = req.body;
    
    const addQuery = `INSERT INTO Students(name, email) VALUES (?,?)`;

    db.execute(addQuery, [name, email], (err)=>{
        if(err){
            console.log(err);
        
            return;
        }

        console.log("Values added!");
        res.status(200).send(`New Entry with name ${name} added`);
    })
};
const updateEntry = (req, res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const updateQuery = `UPDATE Students set name = ? WHERE id =?`;

    db.execute(updateQuery, [name, id], (err, result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }

        if(result.affectedRows === 0){
            res.status(404).send(`no data matching id:${id} found`);
            return;
        }

        res.status(200).send(`Updated name to ${name}`);
    })
};

const deleteEntry = (req, res) =>{
    const {id} = req.params;
    
    const deleteQuery= ` DELETE FROM Students WHERE id = ?`;
    db.execute(deleteQuery, [id], (err, result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message); 
            return;
        }
        if(result.affectedRows === 0){
            res.status(404).send("No data found with id:"+id);
            return;
        }

        res.status(200).send(`Deleted Entry with id : ${id}`);
    })
};
module.exports = {
    addEntries,
    updateEntry,
    deleteEntry
};