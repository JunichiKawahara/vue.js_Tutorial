var state = { count: 0 }

var app = new Vue({
    el: '#app',
    data: {
        // オブジェクトデータ
        message: {
            value: 'Hello Vue.js!'
        },
        // 配列データ
        list: ['りんご', 'ばなな', 'いちご'],
        num: 1,
        scroll: 0,
        count:  0,
        // クラスとスタイルのデータバインディング
        isChild: true,
        isActive: true,
        textColor: 'red',
        bgColor: 'lightgray',
        // SVGのデータバインディング
        radius: 50
    },
    methods: {
        // ボタンをクリックしたときのハンドラ
        increment: function() {
            this.count += 1
        }
    },
    mounted: function() {
        this.scroll = 100
    }
})
