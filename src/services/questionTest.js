import request from '../utils/request'

export function getQuestionTest(params){
    // console.log(params)
return request({
    url: '/test/questions',
    method: 'get',
    params: params
})
}