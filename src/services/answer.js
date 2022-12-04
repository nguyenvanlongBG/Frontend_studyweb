import request from '../utils/request';
export function getAnswer($id) {

    console.log($id);
    return request({ url: '/questionNormal/' + $id+'/answers', method: 'get'})
}
