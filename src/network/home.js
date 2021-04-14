import {request} from './request'

export function getSwiperList(){
    return request({
        url:'clt/swiperlist'
    })
}

export function getShops(){
    return request({
        url:'/clt/shops'
    })
}