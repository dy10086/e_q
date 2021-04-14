import {request} from './request'

export function login(info){
    console.log(info);
    
    return request({
        url:'/clt/login',
        method:'post',
        data:info
    })
}