var app = new Vue({
    el: '#app',
    mounted: function() {
        console.log(this.$el)
        console.log(this.$refs.hello)
    }
})
