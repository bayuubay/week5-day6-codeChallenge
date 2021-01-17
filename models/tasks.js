'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tasks.init({
    name_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tasks',
  });
  return tasks;
};