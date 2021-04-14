import {request} from './request'

export function getCity(){
    return request({
        url:'/api/city'
    })
}

export function getCityList(){
    return request({
        url:'/api/citylist'
    })
}