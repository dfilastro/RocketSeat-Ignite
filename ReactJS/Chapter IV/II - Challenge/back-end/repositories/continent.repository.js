import Continent from '../models/continent.model.js';

async function getContinent(id) {
  try {
    return await Continent.findAll({ where: { continentId: id } });
    // return await Continent.findAll({ include: [{ model: City, where: { continentId: id } }] });
  } catch (err) {
    throw err;
  }
}

async function getContinents() {
  try {
    return await Continent.findAll();
    // return await Continent.findAll({ include: [{ model: City }] });
  } catch (err) {
    throw err;
  }
}

export default { getContinent, getContinents };
