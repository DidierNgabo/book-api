import db from '../models/index';

export default class Controller {
  constructor(model) {
    this.model = model;
  }

  static async createOne(req, res) {
    try {
      const result = db.this.model.create({ ...req.body });
      if (result) {
        return res.status(200).json({
          message: `${this.model} created successfully`,
          ...result,
        });
      }
      return res.status(400).json({ message: 'there was an error' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
