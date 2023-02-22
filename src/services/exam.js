import request from '../utils/request';

export function createExam(data) {
    console.log(data)
    return request({url: '/exam/createNew', method: 'post', data: data})
}
export function doExam(data) { // console.log(params)
    console.log(data)
    return request({url: '/exam/do', method: 'put', data: data})
}
export function getExamHistory(idTest, params) {

    return request({
        url: '/test/' + idTest + '/exam',
        method: 'get',
        params: params
    })
}
export function saveMark(idExam, data) {
    return request({
        url: '/exam/' + idExam + '/mark',
        method: 'PUT',
        data: data
    })

}
export function submitExam(idTest, data) { // console.log(params)
    return request({
        url: '/test/' + idTest + '/submit',
        method: 'put',
        data: data
    })
}
export function getReportExam(examId) {
    return request({
        url: '/exam/' + examId + '/report',
        method: 'GET'
    })

}
