import {request} from './request'

export function getOrder(){
    return request({
        url:'/clt/order'
    })
}