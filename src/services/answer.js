import request from '../utils/request'

export function getAnswer(params){
    // console.log(params)
return request({
    url: '/getAnswerByIdQuestionNormal',
    method: 'get',
    params: params
})
}