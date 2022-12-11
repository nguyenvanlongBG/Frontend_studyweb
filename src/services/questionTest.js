import request from '../utils/request'

export function getQuestionTest(idTest, params) { // console.log(params)
    return request({
        url: '/test/' + idTest + '/do',
        method: 'get',
        params: params
    })
}
