import { Book } from '../models';

export default class bookController {
  static async createOne(req, res) {
    try {
      const result = Book.create({ ...req.body });

      return res.status(201).json({
        message: 'book created successfully',
        result,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      const result = await Book.findAll();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async getOne(req, res) {
    try {
      const { id } = req.params;
      const result = await Book.findOne({ where: { id } });
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const result = Book.update(req.body, {
        where: { id },
      });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const result = Book.destroy({ where: { id } });
      if (result) {
        return res.status(200).json({ message: 'book successfully deleted' });
      }
      return res
        .status(400)
        .json({ message: 'book with specified id not found' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
