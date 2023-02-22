import request from '../utils/request'

export function getQuestionNormal() { // console.log(params)
    return request({url: '/questionNormal/list', method: 'get'})

}
export function getQuestionTestDo(idTest, params) { // console.log(params)
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

export function handleQuestionTest(data) {
    return request({url: '/question/handle', method: 'post', data: data})
}
