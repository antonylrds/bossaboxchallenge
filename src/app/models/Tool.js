import Sequelize, { Model } from 'sequelize';

class Tool extends Model {
  static init(connection) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        link: Sequelize.STRING,
        tags: Sequelize.VIRTUAL,
      },
      {
        sequelize: connection,
        tableName: 'tools',
      }
    );
  }
}

export default Tool;
