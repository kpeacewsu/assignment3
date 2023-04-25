const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.TimeSlot = require('./TimeSlot')(sequelize, Sequelize);
db.Student = require('./Student')(sequelize, Sequelize);

// Associate models
db.Student.belongsTo(db.TimeSlot, {
  foreignKey: 'timeSlotId',
  as: 'timeSlot'
});
db.TimeSlot.hasMany(db.Student, {
  foreignKey: 'timeSlotId',
  as: 'students'
});

module.exports = db;
