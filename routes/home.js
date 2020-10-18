
const getHomeContent = function() {
    return {"sup":"dawg"};
};



const init = function(req,res,next){
    res.send(getHomeContent()); 
};
module.exports = init;