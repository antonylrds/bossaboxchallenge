import Tool from '../models/Tool';
import ToolTags from '../schemas/ToolTags';

class TagController {
  async index(req, res) {
    const { tag } = req.query;
    const toolTags = await ToolTags.find({ tags: { $in: [tag] } }, null, {
      sort: {
        tool_id: 1,
      },
    });

    const ids = toolTags.map(toolTag => toolTag.tool_id);
    const tools = await Tool.findAll({
      where: {
        id: ids,
      },
      attributes: ['id', 'title', 'link', 'description'],
      order: [['id', 'ASC']],
    });

    const response = [];
    for (let i = 0; i < tools.length; i += 1) {
      for (let j = 0; j < toolTags.length; j += 1) {
        // eslint-disable-next-line radix
        if (tools[i].id === parseInt(toolTags[j].tool_id)) {
          tools[i].tags = toolTags[j].tags;
          response.push(tools[i]);
        }
      }
    }

    return res.json(response);
  }
}

export default new TagController();
