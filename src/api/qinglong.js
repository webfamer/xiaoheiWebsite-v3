
import request from './request.js'

export function getQinglongTokenAPi(data) {
    return request({
        url: '/qinglong/list',
        method: 'post',
        data: data,
    })
}
