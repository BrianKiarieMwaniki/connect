import axios  from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) =>{
    const expectedEror = error.response && error.response.status >= 400 && error.response.status <= 500;

    if(!expectedEror){
        toast.error(`An unexpected error occured. Error ${expectedEror}`);
    }

    return Promise.reject(error);
})

const httpActions = {
    get: axios.get
}

export default httpActions;