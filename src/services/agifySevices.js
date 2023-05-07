import httpActions from './httpService';
import config from '../config/config.json'


export const getAgePrediction = (name) =>{
    return httpActions.get(`${config.agifyApiUrl}/?name=${name}`);
}
