Vue.component('comp-child', {
    template: '<div class="comp-child"><p>ここにスロットを埋め込む → \
        <slot>デフォルトを表示</slot></p>\
        <p>{{ val }}</p></div>',
    props: { val: String }
})

Vue.component('multi-slot-child', {
    template: (function() {/*
        <section class="multi-slot-child">
            <header>
                <slot name="header">デフォルトタイトル</slot>
            </header>
            <div class="content">
                <slot>デフォルトコンテンツ</slot>
            </div>
            <slot name="footer">
            </slot>
        </section>
    */}).toString().match(/\/\*\n*([^]*)\*\//)[1].replace(/\n*$/, "")
})



var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js !'
    }
})
