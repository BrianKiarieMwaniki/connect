import httpActions from "./httpService";
import config from '../config/config.json';

export const getExcuse = (excuseFor) =>{
    return httpActions.get(`${config.excusesApiUrl}/${excuseFor}`);
}
