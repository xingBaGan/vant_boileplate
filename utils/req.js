
let baseUrl = 'https://jsonplaceholder.typicode.com'

let request = (options ) => {
    let { url, method = 'GET', data = {}, tapName = '加载中' } = options
    let header = {}
    if (wx.getStorageSync('token')) {
        header.token = wx.getStorageSync('token')  //登录后拿到token值
    }
    wx.showLoading({
        title: tapName,
    })
    return new Promise((resolve, reject) => {

        wx.request(Object.assign({}, {
            method,
            header,
            data,
            url: options.url.substring(0, 1) === '/' ? `${baseUrl}${url}` : `${url}`,
            success(res) {
                if (res.statusCode == 200) {
                    resolve(res.data)
                } else if (res.statusCode == 400) {
                    reject(new Error("服务器错误"))
                }
            },
            fail(err) {
                reject(err)
            },
            complete() {
                wx.hideLoading()
            }
        }))
    })
}
module.exports = request;