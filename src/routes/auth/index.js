import express from 'express';
import UserCtrl from '../../controllers/userController';

const router = express.Router();

router.post('/register', UserCtrl.register);
router.post('/login', UserCtrl.login);

export default router;
