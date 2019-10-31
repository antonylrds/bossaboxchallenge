module.exports = {
  dialect: 'pgsql',
  host: 'localhost',
  port: 5436,
  username: 'postgres',
  password: 'docker',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
