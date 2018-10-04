var scroll = new SmoothScroll()

var app = new Vue({
    el: '#app',
    data: {
        scrollY: 0,
        timer: null
    },
    created : function() {
        // イベントハンドラを登録する
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy: function() {
        // イベントハンドラを解除する（コンポーネントやSPAの場合忘れずに！）
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        // 違和感のない程度に200ms感覚でデータを更新する例
        handleScroll: function() {
            if (this.timer === null) {
                this.timer = setTimeout(function() {
                    this.scrollY = window.scrollY
                    clearTimeout(this.timer)
                    this.timer = null
                }.bind(this), 200)
            }
        },
        scrollTop: function() {
            scroll.animateScroll(0)
        }
    }
})
