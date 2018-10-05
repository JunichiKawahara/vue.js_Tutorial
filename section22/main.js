Vue.component('my-component', {
    template: '<p>{{ message }}</p>',
    data: function() {
        return {
            message: 'Hello Vue.js'
        }
    },
    methods: {
        
    }
})

var myLocalComponent = {
    template: '<p>MyLocalComponent</p>'
}

var app = new Vue({
    el: '#app',
    components: {
        'my-local-component': myLocalComponent
    }

})
