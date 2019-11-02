import Tool from '../models/Tool';

class ToolController {
  async store(req, res) {
    const tool = await Tool.create(req.body);

    return res.json(tool);
  }

  async index(req, res) {
    const tools = await Tool.findAll();

    return res.json(tools);
  }

  async show(req, res) {
    const tool = await Tool.findOne({
      where: {
        id: req.params.id,
      },
    });

    return res.json(tool);
  }

  async update(req, res) {
    const tool = await Tool.findByPk(req.params.id);

    return res.json(tool);
  }

  async delete(req, res) {
    const tool = await Tool.findByPk(req.params.id);

    tool.destroy();

    return res.json({ msg: 'Ferramenta removida com sucesso.' });
  }
}

export default new ToolController();
