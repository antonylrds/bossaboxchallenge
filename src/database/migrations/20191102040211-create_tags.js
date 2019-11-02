module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tags', { id: Sequelize.INTEGER });
  },

  down: queryInterface => {
    return queryInterface.dropTable('tags');
  },
};
