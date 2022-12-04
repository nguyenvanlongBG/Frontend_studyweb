import request from '../utils/request'

export function getQuestionTest(idTest) { // console.log(params)
    return request({
        url: '/test/' + idTest + '/do',
        method: 'get'

    })
}
