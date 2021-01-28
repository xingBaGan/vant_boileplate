//index.js
//获取应用实例
const app = getApp()
// import request from '../../utils/req.js'
let request = require('../../utils/req.js')
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  fetchData() {
    request({
      url: '/todos/1',
    }).then((data) => {
      console.log(data)
    }).catch((err) => {
      console.log(err)
    })
  },
  fetchPost() {
    request({
      url: 'https://jsonplaceholder.typicode.com/posts',
    }).then((data) => {
      console.log(data)
    }).catch((err) => {
      console.log(err)
    })
  }
})
