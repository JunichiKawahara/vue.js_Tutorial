var state = { count: 0 }

var app = new Vue({
    el: '#app',
    data: {
        message: 'Vue.js!',
        state: state
    }
})
state.count++
