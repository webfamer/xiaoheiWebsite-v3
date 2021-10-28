import request from './request.js'

export function getSoftwareListAPi(data) {
    return request({
        url: '/list',
        method: 'post',
        data: data,
    })
}
