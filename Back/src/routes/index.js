const { Router } = require('express');
const router = Router();
const { getCharDetail } = require('../controllers/getCharDetail');
const { getCharById } = require('../controllers/getCharById');
const {postFav} = require('../controllers/postFav')
const {getFav} = require('../controllers/getFav')
const {deleteFav} = require('../controllers/deleteFav')
const {login} = require('../controllers/login')
const {postUser} = require('../controllers/postUser')
// const { getFav, addFav, delFav } = require('../controllers/favControllers');

router.get('/detail/:id', getCharDetail);
router.get('/onSearch/:id', getCharById);

router.post('/favs', postFav);
router.get('/favs', getFav);
router.delete('/favs/:id', deleteFav);

router.get('/login', login);
router.post('/login', postUser);


// router.get('/detail/:id', function(req, res, next) {
//     getCharDetail(req, res, );
// }, function(req, res) {
//     res.status(200).json({ message: 'Char detail request successful!' });
// });

// router.get('/onSearch/:id', function(req, res, ) {
//     getCharById(req, res, );
// }, function(req, res) {
//     res.status(200).json({ message: 'Char ID request successful!' });
// });



module.exports = router;
