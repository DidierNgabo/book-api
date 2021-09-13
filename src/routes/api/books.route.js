import express from 'express';
import BookController from '../../controllers/bookController';

const router = express.Router();

router.get('/', BookController.getAll);
router.get('/:id', BookController.getOne);
router.post('/', BookController.createOne);
router.put('/:id', BookController.update);
router.delete('/:id', BookController.delete);

export default router;
