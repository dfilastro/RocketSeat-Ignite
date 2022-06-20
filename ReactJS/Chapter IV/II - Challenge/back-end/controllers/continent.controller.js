import ContinentService from '../services/continent.service.js';

async function getContinent(req, res, next) {
  try {
    res.send(await ContinentService.getContinent(req.params.id));
  } catch (err) {
    next(err);
  }
}

async function getContinents(_req, res, next) {
  try {
    res.send(await ContinentService.getContinents());
  } catch (err) {
    next(err);
  }
}

export default { getContinent, getContinents };
