import axios, { Method } from "axios";

type RequesParams = {
    method?: Method;
    url: string;    
}


export const makeRequest = ({ method = 'GET', url }: RequesParams) => {
    return axios({
        method,
        url: `${url}`       
    })
}