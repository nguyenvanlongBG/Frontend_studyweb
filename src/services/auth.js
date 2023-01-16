import request from '../utils/request';
export function register(data) { // console.log(params)
    return request({url: '/auth/register', method: 'post', data: data})
}

export function login(data) { // console.log(params)
    return request({url: '/auth/login', method: 'post', data: data})
}
