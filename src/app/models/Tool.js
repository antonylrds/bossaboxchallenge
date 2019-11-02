import Sequelize, { Model } from 'sequelize';

class Tool extends Model {
  static init(connection) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        link: Sequelize.STRING,
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
      },
      {
        sequelize: connection,
        tableName: 'tools',
      }
    );
  }
}

export default Tool;
