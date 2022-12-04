import request from '../utils/request'

export function getQuestion() { // console.log(params)
    return request({url: '/questionNormal/list', method: 'get'})

}
