const axios=require("axios");

function getPotd(){
    return axios.get("https://api.nasa.gov/planetary/apod?api_key=wf9pcE2E7kGDEnsWvJrmEcK5RahfN5vp3yggOgpG");
}

module.exports=getPotd;