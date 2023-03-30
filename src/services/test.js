import request from '../utils/request';
export function getTests(data) { // console.log(params)
    return request({url: '/test/list', method: 'get', data: data})
}
export function getTest(id) {
    return request({
        url: '/test/' + id + '/detail',
        method: 'get'
    })

}
export function createTest(data) { // console.log(params)
    return request({url: '/test/create', method: 'post', data: data})
}

export function updateTest(data) { // console.log(params)
    return request({url: '/test/update', method: 'put', data: data})
}

export function updateQuestionTest(id, data) { // console.log(params)

    return request({
        url: '/test/' + id + '/updateTest',
        method: 'put',
        data: data
    })
}
export function importTest(id, data) {
    return request({
        url: '/test/' + id + '/import',
        method: 'post',
        data: data
    })

}

export function markTest(id, data) { // console.log(params)

    return request({
        url: '/exam/' + id + '/update',
        method: 'post',
        data: data
    })
}

export function getNumericalQuestion(id, params) {

    return request({
        url: '/test/' + id + '/nummericalQuestion',
        method: 'get',
        params: params
    })
}
export function getQuestionsByIdTest() { // console.log(params)
    return request({url: '/getQuestionsTest ', method: ' get '})

}
export function getTestsByIdUser(userId) { // console.log(params)
    return request({
        url: '/tests',
        method: 'get',
        params: {
            'userId': userId
        }
    })
}
export function getExams(id, params) {
    return request({
        url: '/test/' + id + '/exams',
        method: 'get',
        params: params
    })
}
export function getReportTest(id) {
    return request({
        url: '/test/' + id + '/report',
        method: 'get'
    })


}
