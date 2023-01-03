import request from '../utils/request';
export function getNormalAnswer(id) {

    return request({
        url: '/answerNormal/' + id + '/show',
        method: 'get'
    })

}
