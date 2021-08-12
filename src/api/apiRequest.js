import qs from 'qs';
import axios from '@/utils/index';


export function  getPage (data) {
    return axios.post('/poalbum/activInfo/page/w/v1',  qs.stringify(data))
}