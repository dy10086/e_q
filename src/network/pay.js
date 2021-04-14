import {request} from './request'

export function getAddress(){
    return request({
        url:'/clt/address'
    })
}

export function setOreder(shop_id,price){
    return request({
        url:'/clt/order',
        method:'post',
        data:{
            shop_id,
            price
        }
    })
}

