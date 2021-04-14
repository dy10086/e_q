import axios from 'axios'

export function request(config){

    const instance = axios.create({
        // baseURL:'/clt',
        timeout:5000
    })

    // request拦截器
    instance.interceptors.request.use(config => {

        if(localStorage.getItem('token')){
            config.headers = {'X-Access-Token':localStorage.getItem('token')}
        }
        return config
        
    })
    return instance(config)
}