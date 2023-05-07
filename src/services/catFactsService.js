import config from '../config/config.json';
import httpActions from './httpService';

export const getCatFact = () => {
    return httpActions.get(`${config.catsApiUrl}/fact`);
}