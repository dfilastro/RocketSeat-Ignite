import CityService from '../services/city.service.js';

async function getCities(req, res, next) {
  try {
    res.send(await CityService.getCitiesByContinentId(req.params.id));
  } catch (err) {
    next(err);
  }
}

export default { getCities };
