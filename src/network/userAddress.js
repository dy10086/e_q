import {request} from './request'

export function getCity(){
    return request({
        url:'/api/city'
    })
}

export function search(keyword,region) {
    return request({
        url:'/api/address',
        params:{
            keyword,
            region
        }
    })
}

export function setAddress(name,phone,address) {
    return request({
        url:'/clt/setaddress',
        params:{
            name,
            phone,
            address
        }
    })
}