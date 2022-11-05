import request from '../utils/request'

export function getChoiceByIdQuestion($param){
    // console.log(params)
return request({
    url: '/getChoice',
    method: 'get',
    params: params
})
}