const {User, Favorite} = require('../DB_connection');

const getFavs = async (req, res) =>{
    const {userId} = req.query;
    try {
        const favs= await Favorite.findAll({
            include: [{model: User, where: {id: userId}}],

        });
        res.status(200).json(favs);
    } catch (error) {
        res.status(500).json({message: error})
    }
};

module.exports = {getFavs};