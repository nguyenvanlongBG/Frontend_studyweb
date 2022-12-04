import request from '../utils/request';
export function getTests(params) { // console.log(params)
    return request({url: '/test/list', method: 'get', params: params})
}
export function getDetailTest($id) { // console.log(params)

    return request({
        url: '/test/' + $id + '/do',
        method: 'get'
    })
}
export function getQuestionsByIdTest() { // console.log(params)
    return request({url: '/getQuestionsTest ', method: ' get '})

}
export function getTestsByIdUser($userId) { // console.log(params)
    return request({
        url: '/tests',
        method: 'get',
        params: {
            'userId': $userId
        }
    })
}
