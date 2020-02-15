const { Router } = require ('express');
const router = Router();
const user = require('../controllers/index');

router.get('/', user.users);
router.post('/', user.create);
router.get('/:id', user.getUser);
router.delete('/:id', user.delete);
router.put('/:id', user.update);

module.exports = router;