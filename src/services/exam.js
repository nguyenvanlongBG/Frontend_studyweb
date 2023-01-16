import request from '../utils/request';
export function getExams(data) {
    return request({url: '/exam/list', method: 'get', data: data})
}
export function createExam(data) {
    console.log(data)
    return request({url: '/exam/createNew', method: 'post', data: data})
}
export function updateExam(data) { // console.log(params)
    return request({url: '/exam/update', method: 'put', data: data})
}
export function getExamHistory(idTest, params) {

    return request({
        url: '/test/' + idTest + '/exam',
        method: 'get',
        params: params
    })
}
