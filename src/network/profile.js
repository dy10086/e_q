import {request} from './request'

export function getUser(){
    return request({
        url:'/clt/user'
    })
}