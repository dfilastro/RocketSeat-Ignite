import City from '../models/city.model.js';

async function getCitiesByContinentId(id) {
  try {
    return await City.findAll({
      where: {
        continent_id: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

export default { getCitiesByContinentId };
