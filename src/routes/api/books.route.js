import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ books: 'all books' });
});
router.get('/:id', (req, res) => {
  res.status(200).json({ books: 'one book' });
});
router.post('/:id', (req, res) => {
  res.status(200).json({ books: 'post a new book' });
});
router.put('/:id', (req, res) => {
  res.status(200).json({ books: 'update one book' });
});
router.delete('/:id', (req, res) => {
  res.status(200).json({ books: 'delete one book' });
});

export default router;
