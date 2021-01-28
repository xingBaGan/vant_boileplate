// pages/event.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    handleTap1(e) {
        console.log("method 1:" + "触发者" + e.target.id + "当前事件着" + e.currentTarget.id);
    },
    handleTap2(e) {
        console.log("method 2:" + "触发者" + e.target.id + "当前事件着" + e.currentTarget.id);
    },
    handleTap3(e) {
        console.log("method 3:" + "触发者" + e.target.id + "当前事件着" + e.currentTarget.id);
    }

})