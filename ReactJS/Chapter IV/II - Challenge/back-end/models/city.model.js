import Sequelize from 'sequelize';
import db from '../repositories/db.js';
// import Continent from './continent.model.js';

const City = db.define(
  'city',
  {
    cityId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    flag: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true, freezeTableName: true }
);

// City.belongsTo(Continent, { foreignKey: 'continentId' });

export default City;
