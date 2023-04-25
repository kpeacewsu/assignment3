const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Student = sequelize.define(
    "Student",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      projectTitle: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      timeSlotId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "TimeSlot",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Student",
    }
  );

  return Student;
};
