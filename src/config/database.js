module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100',
  port: 5436,
  database: 'bossabox',
  username: 'postgres',
  password: 'docker',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
