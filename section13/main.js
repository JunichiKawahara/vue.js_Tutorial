var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        message: 'Hello Vue.js'
    },

    methods: {
        handleClick: function() {
            alert('クリックしたよ');
        },
        handler: function(comment) {
            this.counter += 1;
            console.log(comment);
        },
        handleInput: function(event) {
            this.message = event.target.value;
        }
    }
})
