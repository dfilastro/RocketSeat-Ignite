import Sequelize from 'sequelize';
import db from '../repositories/db.js';
// import City from './city.model.js';

const Continent = db.define(
  'continent',
  {
    continentId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    countries: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    languages: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    cities: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { underscored: true, freezeTableName: true }
);

// Continent.belongsTo(City, { foreignKey: 'cityId' });

export default Continent;
