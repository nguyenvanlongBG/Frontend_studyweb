import request from '../utils/request'

export function getQuestionTestDo(idTest, params) { // console.log(params)
    console.log(params)
    return request({
        url: '/test/' + idTest + '/do',
        method: 'get',
        params: params
    })
}
export function getQuestionTestUpdate(idTest, params) {

    return request({
        url: '/test/' + idTest + '/update',
        method: 'get',
        params: params
    })
}
export function handleQuestion(params) { // console.log(params)
    console.log(params)
    return request({url: '/question/handle', method: 'post', params: params})
}
