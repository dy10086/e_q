import {request} from './request'

export function getShopsInfo(id){
    return request({
        url:'/clt/shopsinfo',
        params:{id}
    })
}

export function getGoods(id){
    return request({
        url:'/clt/goods',
        params:{id}
    })
}