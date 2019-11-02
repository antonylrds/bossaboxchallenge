module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tools_tags', { id: Sequelize.INTEGER });
  },

  down: queryInterface => {
    return queryInterface.dropTable('tools_tags');
  },
};
