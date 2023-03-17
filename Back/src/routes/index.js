const { Router } = require('express');
const router = Router();
const { getCharDetail } = require('../controllers/getCharDetail');
const { getCharById } = require('../controllers/getCharById');
const { getFav, addFav, delFav } = require('../controllers/favControllers');

router.get('/detail/:id', getCharDetail);
router.get('/onSearch/:id', getCharById);

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


router.post('/fav', addFav);
router.get('/fav', getFav);
router.delete('/fav/:id', delFav);

module.exports = router;
