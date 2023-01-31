'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    hobby: DataTypes.STRING(50),
    score: DataTypes.INTEGER,
    teacher_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};