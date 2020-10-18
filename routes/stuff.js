
const getStuffContent = function(things) {
    return {"yo":things};
};



const init = function(req,res,next){
    res.send(getStuffContent(req.params.things)); 
};
module.exports = init;