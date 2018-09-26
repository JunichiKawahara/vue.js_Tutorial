

var app = new Vue({
    el: '#app',
    data: {
        name: 'キマイラ',
        list: [
            { id: 1, name: 'スライム', hp: 100 },
            { id: 2, name: 'ゴブリン', hp: 200 },
            { id: 3, name: 'ドラゴン', hp: 500 },
        ]
    },
    methods: {
        doAttack: function(index) {
            this.list[index].hp -= 10
        },
        // 追加ボタンをクリックしたときのハンドラ
        doAdd: function() {
            // リスト内で一番大きいIDを取得する
            var max = this.list.reduce(function(a, b) {
                return a.id > b.id ? a.id : b.id
            }, 0)
            // 新しいモンスターをリストに追加する
            this.list.push({
                id: max + 1,
                name: this.name,
                hp: 500
            })
        },
        doRemove: function(index) {
            this.list.splice(index, 1)
        }
    }
})
