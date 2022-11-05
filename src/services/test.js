import request from '../utils/request'

export function getTests(){
    // console.log(params)
return request({
    url: '/tests',
    method: 'get'
})
}
export function getInfoTestById($id){
    // console.log(params)
return request({
    url: '/tests/'+$id,
    method: 'get',
})
}
export function getQuestionsByIdTest(){
    // console.log(params)
return request({
    url: '/getQuestionsTest',
    method: 'get',
})
}