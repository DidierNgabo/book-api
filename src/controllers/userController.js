import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../models';

export default class UserControler {
  static async register(req, res) {
    try {
      // eslint-disable-next-line object-curly-newline
      const { fullname, username, email, phone, password, role } = req.body;
      const user = {
        fullname,
        username,
        email,
        phone,
        role,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(8)),
      };
      const result = await User.create(user);
      return res.status(201).json({
        message: 'user created successfully',
        data: result,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      const result = await User.findAll();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async getOne(req, res) {
    try {
      const { id } = req.params;
      const result = await User.findOne({ where: { id } });
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const result = await User.update(req.body, {
        where: { id },
      });
      return res.status(200).json({
        message: 'user updated successfully',
        payload: result,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await User.destroy({ where: { id } });
      if (result) {
        return res.status(200).json({ message: 'user successfully deleted' });
      }
      return res
        .status(400)
        .json({ message: 'user with specified id not found' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({
        where: {
          username,
        },
      });
      if (!user) {
        return res.status(401).json({
          error: 'user not found',
        });
      }
      const valid = await bcrypt.compareSync(password, user.password);
      if (!valid) {
        return res.status(401).json({
          error: 'Incorrect password!',
        });
      }

      const accessToken = jwt.sign(
        {
          user,
        },
        // eslint-disable-next-line comma-dangle
        process.env.SECRET
      );
      return res.status(200).json({
        message: 'logged in successfully',
        accessToken,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
