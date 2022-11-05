import request from '../utils/request'

export function getDocument(){
    // console.log(params)
return request({
    url: '/listPost',
    method: 'get',
})
}