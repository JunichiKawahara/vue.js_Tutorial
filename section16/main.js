var app = new Vue({
    el: '#app',
    data: {
        width: 800,
        height: 600,
        budget: 300,
        limit: 2,
        order: false,
        list: [
            { id: 1, name: 'りんご', price: 100 },
            { id: 2, name: 'ばなな', price: 200 },
            { id: 3, name: 'いちご', price: 400 },
            { id: 4, name: 'おれんじ', price: 300 },
            { id: 5, name: 'めろん', price: 500 },
            { id: 6, name: 'ぶどう', price: 600 },
        ]
    },
    computed: {
        // 算出プロパティhalfWidthを定義する
        halfWidth: {
            get: function() { return this.width / 2 },
            set: function(val) { this.width = val * 2 }
        },
        halfHeight: function() {
            return this.height / 2
        },
        halfPoint: function() {
            return {
                x: this.halfWidth,
                y: this.halfHeight
            }
        },
        // Math.random() を算出プロパティで返す
        // キャッシュが働くため、何度実行しても同じ値を返すはず
        computedData: function() { return Math.random() },

        // budget以下のリストを返す算出プロパティ
        matched: function() {
            return this.list.filter(function(el) {
                return el.price <= this.budget
            }, this)
        },

        sorted: function() {
            return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
        },

        // matchedで返ったデータをlimit件返す算出プロパティ
        limited: function() {
            return this.sorted.slice(0, this.limit)
        },

        // 最終的な結果として使用するプロパティを常に固定させるために、
        // 最後にlimited の結果を返す算出プロパティを用意する
        filteredList: function() {
            return this.limited
        },
    },
    methods: {
        // Math.random() をメソッドで返す
        // 毎回違う値が返るはず
        methodsData: function() { return Math.random() }
    }
})
