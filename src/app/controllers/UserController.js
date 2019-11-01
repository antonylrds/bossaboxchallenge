import User from '../models/User';

class UserController {
  async store(req, res) {
    const { email } = req.body;

    const user = await User.findOne({ where: { email } });

    if (user) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const { id, name } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }

  async show(req, res) {
    const user = await User.findByPk(req.params.id);
    return res.json(user);
  }

  async update(req, res) {
    const user = await User.findByPk(req.params.id);
    const { oldPassword, email } = req.body;

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = await user.update(req.body);

    console.log(id, name);

    return res.json({
      id,
      name,
      email,
    });
  }

  async delete(req, res) {
    const user = await User.findByPk(req.params.id);

    user.destroy();

    return res.json({ msg: 'User deleted successfully' });
  }
}

export default new UserController();
