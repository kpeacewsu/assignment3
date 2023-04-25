const {
  DataTypes
} = require('sequelize');

module.exports = (sequelize) => {
  const TimeSlot = sequelize.define('TimeSlot', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    availableSeats: DataTypes.INTEGER
  });

  return TimeSlot;
};