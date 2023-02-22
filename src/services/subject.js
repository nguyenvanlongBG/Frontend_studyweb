import request from '../utils/request';
export function getItems(subject_id) { // console.log(params)
    return request({
        url: '/subject/' + subject_id + '/items',
        method: 'get'
    })

}
