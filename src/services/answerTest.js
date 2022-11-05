import request from '../utils/request'

export function getAnswerTest(){
    // console.log(params)
return request({
    url: '/getAnswerTest',
    method: 'get'
})
}