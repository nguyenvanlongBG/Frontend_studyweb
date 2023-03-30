import request from '../utils/request'

export function upload(data) {
    return request({url: '/review/create', method: 'post', data: data})
}
