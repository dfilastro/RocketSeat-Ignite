import ContinentRepository from '../repositories/continent.repository.js';

async function getContinent(id) {
  return await ContinentRepository.getContinent(id);
}

async function getContinents() {
  return await ContinentRepository.getContinents();
}

export default { getContinent, getContinents };
