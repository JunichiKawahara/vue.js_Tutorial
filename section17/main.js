var app = new Vue({
    el: '#app',
    data: {
        list: [],
        current: '',
        topics: [
            { value: 'vue', name: 'Vue.js' },
            { value: 'jQuery', name: 'jQuery' }
        ]
    },
    watch: {
        current: function(val) {
            // GitHubのAPIからトピックのリポジトリを検索する
            axios.get('https://api.github.com/search/repositories', {
                params: { q: 'topic:' + val }
            }).then(function(response) {
                this.list = response.data.items
                console.log('Get OK !!')
            }.bind(this))
        }
    }
})
