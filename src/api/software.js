import request from './request.js'

export function getSoftwareListAPi(data) {
    return request({
        url: '/list',
        method: 'post',
        data: data,
    })
}
export function getSoftwareDetailAPi(data) {
    return request({
        url: '/detail',
        method: 'post',
        data: data,
    })
}
