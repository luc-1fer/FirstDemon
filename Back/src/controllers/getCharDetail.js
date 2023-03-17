const axios = require('axios');
const { response } = require('express');

const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = (req, res)=>{
    const params = req.params;
    const id = params.id;

    axios
    .get(URL + id)
    .then((response) => {
        const {id, image, species, gender, origin} = response.data;
        res.status(200).json({id, image, species, gender, origin: origin.name})
        
    })
    .catch((error) => {
        res.status(500).json({message : error.message})
        
    })
};

module.exports = getCharDetail;

