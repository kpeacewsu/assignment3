module.exports = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Welcome123!',
  database: process.env.DB_NAME || 'webtech',
  dialect: 'mysql',
  define: {
    timestamps: false,
    freezeTableName: true,
  },
  pool: {
    max: 10, // maximum number of connections in the pool
    min: 0, // minimum number of connections in the pool
    acquire: 30000, // maximum time (in milliseconds) that a connection can be idle before being released
    idle: 10000 // maximum time (in milliseconds) that a connection can be idle before being closed
  }
};
