import {request} from './request'

export function search(keyword,region) {
    return request({
        url:'/api/address',
        params:{
            keyword,
            region
        }
    })
}