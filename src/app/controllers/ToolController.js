import Tool from '../models/Tool';
import ToolTags from '../schemas/ToolTags';

class ToolController {
  async store(req, res) {
    const { title, tags } = req.body;
    const toolExists = await Tool.findOne({
      where: {
        title,
      },
    });

    if (toolExists) {
      return res.status(400).json({ error: 'Tools already exists' });
    }

    const { id, description, link } = await Tool.create(req.body);

    await ToolTags.create({
      tool_id: id,
      tags,
    });

    return res.status(201).json({
      id,
      title,
      link,
      description,
      tags,
    });
  }

  async index(req, res, next) {
    if (req.query.tag) {
      return next();
    }
    const tools = await Tool.findAll({
      attributes: ['id', 'title', 'link', 'description'],
    });

    for (let i = 0; i < tools.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      tools[i].tags = (await ToolTags.findOne({ tool_id: tools[i].id })).tags;
    }

    return res.json(tools);
  }

  async delete(req, res) {
    const { id } = req.params;
    const tool = await Tool.findByPk(id);
    const toolTags = await ToolTags.findOneAndDelete({ tool_id: id });

    toolTags.remove();
    tool.destroy();

    return res.status(204).json({ msg: 'Ferramenta removida com sucesso.' });
  }
}

export default new ToolController();
