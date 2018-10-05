Vue.directive('focus_grobal', {
    inserted: function(el) {
        el.focus()
    }
})

var app = new Vue({
    el: '#app',
    directives: {
        focus: {
            //  紐付いている要素がDOMに挿入される時
            inserted: function(el) {
                el.focus()      // 要素にフォーカスを当てる
            }
        }
    }
})
