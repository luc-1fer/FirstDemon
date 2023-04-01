let favs = require('../utils/favs');

const addFav = (req, res) => {
    // const char = req.body;

    // if(char && favs.push(char)) res.status(200).json(char)
    // else res.status(500).json({error: 'Error Add Fav'})
    favs.push(req.body);
    res.status(201).json(favs);
}

const getFav = (req, res) => {
    // if(favs) res.status(200).json(favs)
    // else res.status(500).json({error: 'Error Get Fav'})
    
    res.status(200).json(favs)
}

const delFav = (req, res) => {
    const {id} = req.params;

    // if(id > 0 ){
    //     favs = favs.filter((element)=> element.id !== id)
    //     res.status(200).json({success : true})
    // } else{
    //     res.status(500).json({error: 'Error Del Fav'})
    // }
    favs = favs.filter((element)=> element.id !== Number(id))
    res.status(200).json(favs)
}


module.exports ={ addFav, delFav, getFav};
