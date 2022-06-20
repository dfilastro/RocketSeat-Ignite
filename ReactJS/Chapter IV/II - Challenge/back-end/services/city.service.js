import CityRepository from '../repositories/city.repository.js';

async function getCitiesByContinentId(id) {
  return await CityRepository.getCitiesByContinentId(id);
}

export default { getCitiesByContinentId };
