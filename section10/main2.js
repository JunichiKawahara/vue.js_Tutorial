var app = new Vue({
    el: '#app',
    data: {
        // あらかじめ空リストを用意しておく
        list: []
    },
    created: function() {
        axios.get('list.json').then(function(response) {
            // 取得完了したらlist に代入する
            this.list = response.data
        }.bind(this)).catch(function(e) {
            console.error(e)
        })
    }
})
