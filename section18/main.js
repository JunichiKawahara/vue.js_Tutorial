Vue.filter('localeNumGrobal', function(val) {
    return val.toLocaleString()
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World and Vue.js !!',
        foo: 'F_O_O',
        price: 19800
    },
    filters: {
        localeNum: function(val) {
            return val.toLocaleString()
        },
        filter: function(message, foo, num) {
            console.log(message, foo, num)
            return message + " from " + foo
        },
        round: function(val) {
            // 小数点以下を第2位に丸めるフィルタ
            return Math.round(val * 100) / 100
        },
        radian: function(val) {
            return val * Math.PI / 180
        }
    },
})

