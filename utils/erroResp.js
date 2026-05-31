const errResponse =(err)=> {
    if(err){
        console.log(err.message);
        db.end();
        return;
    }
};

module.exports = errResponse;