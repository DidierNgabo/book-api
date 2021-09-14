import express from 'express';
import UserCtrl from '../../controllers/userController';

const router = express.Router();

router.get('/', UserCtrl.getAll);
router.put('/:id', UserCtrl.update);
router.delete('/:id', UserCtrl.delete);
router.get('/id', UserCtrl.getOne);

export default router;
