const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = async (req, res)=>{
    const {detailId} = req.params;
    const response = await axios.get ( URL + detailId)

    try {
        const character = {
            id: response.data.id,
            image: response.data.image,
            name: response.data.name,
            gender: response.data.gender,
            species: response.data.species,
            stats: response.data.stats,
            origin: response.data.origin?.name
        };
        res.status(200).json(character)
    } catch (error) {
        res.status(500).json(error.message);
    }

    //CON PROMESAS
    /*axios
    .get(URL + id)
    .then((response) => {
        const {id, image, species, gender, origin} = response.data;
        res.status(200).json({
            id, 
            image, 
            species, 
            gender, 
            origin: origin.name
        })
        
    })
    .catch((error) => {
        res.status(500).json({message : error.message})
        
    })*/
};

module.exports = {getCharDetail};

