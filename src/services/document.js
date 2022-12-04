import request from '../utils/request'

export function getDocument() { // console.log(params)
    return request({url: '/post/list', method: 'get'})
}
