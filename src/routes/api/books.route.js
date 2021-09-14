import express from 'express';
import BookController from '../../controllers/bookController';
import auth from '../../middlewares/auth';

const router = express.Router();
/**
 * @openapi
 * /api/books:
 *  get:
 *    description: list of all available books
 *    responses:
 *      200:
 *         description: Returns an array of books
 */
router.get('/', auth, BookController.getAll);
/**
 * @openapi
 * /api/books/{id}:
 *  get:
 *    description: return one book by id
 *    parameters:
 *     -  name: id
 *        description: the id of the book to get
 *        in : request
 *        required: true
 *        type: string
 *    responses:
 *    200 :
 *      description: Returns one book by id
 */
router.get('/:id', auth, BookController.getOne);
/**
 * @openapi
 * /api/books:
 *  post:
 *    description: list of all available books
 *    parameters:
 *    - name: title
 *      description: the title of the book
 *      in : body
 *      required: true
 *      type: string
 *    - name: author
 *      description: the author of the book
 *      in : body
 *      required: true
 *      type: string
 *    - name: publisher
 *      description: the publishing house
 *      in: body
 *      required: true
 *    - name: publicationDate
 *      description: date of the publication
 *      in: body
 *      required: true
 *    responses:
 *      201:
 *         description: Returns success message
 */
router.post('/', auth, BookController.createOne);
/**
 * @openapi
 * /api/books:
 *  put:
 *    description: list of all available books
 *    parameters:
 *    - name: title
 *      description: the title of the book
 *      in : body
 *      required: true
 *      type: string
 *    - name: author
 *      description: the author of the book
 *      in : body
 *      required: true
 *      type: string
 *    - name: publisher
 *      description: the publishing house
 *      in: body
 *      required: true
 *    - name: publicationDate
 *      description: date of the publication
 *      in: body
 *      required: true
 *    responses:
 *      200:
 *         description: Returns success message
 */
router.put('/:id', auth, BookController.update);
/**
 * @openapi
 * /api/books:
 *  delete:
 *    description: list of all available books
 *    parameters:
 *     - name: id
 *       description: the id of the book to be deleted
 *       in: request
 *       required: true
 *    responses:
 *      200:
 *         description: Returns a success message
 */
router.delete('/:id', auth, BookController.delete);

export default router;
