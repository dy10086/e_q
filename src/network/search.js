import {request} from './request'

export function getSearch(key){
    return request({
        url:'/clt/search',
        params:{key}
    })
}