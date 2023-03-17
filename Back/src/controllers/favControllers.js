let favs = require('../utils/favs');

const addFav = (req, res) => {
    const char = req.body;

    if(char && favs.push(char)) res.status(200).json(char)
    else res.status(500).json({error: 'Error Add Fav'})
}

const getFav = (req, res) => {
    if(favs) res.status(200).json(favs)
    else res.status(500).json({error: 'Error Get Fav'})

}

const delFav = (req, res) => {
    const {id} = req.params;

    if(id > 0 ){
        favs = favs.filter((element)=> element.id !== id)
        res.status(200).json({success : true})
    } else{
        res.status(500).json({error: 'Error Del Fav'})
    }
}


module.exports ={ addFav, delFav, getFav};
