Vue.component('comp-child', {
    template: '<p id="child" class="child">{{ val }}</p>',
    props: ['val']
})

Vue.component('my-component', {
    template: '<div>親コンポーネント→<comp-child val="ABC"></comp-child></div>'
})

Vue.component('monster-component', {
    template: '<li>{{ name }} HP.{{ hp }}</li>',
    props: {
        name: String,
        hp: Number
    }
})

Vue.component('event-child', {
    template: '<button v-on:click="handleClick">イベント発火</button>',
    methods: {
        handleClick: function() {
            this.$emit('childs-event')
        }
    }
})

Vue.component('eventup-child', {
    template: '<li>{{ name }} HP.{{ hp }}\
        <button v-on:click="doAttack">攻撃する</button></li>',
    props: {
        id: Number,
        name: String,
        hp: Number
    },
    methods: {
        doAttack: function() {
            this.$emit('attack', this.id)
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js !',
        list: [
            { id: 1, name: 'スライム', hp: 100 },
            { id: 2, name: 'ゴブリン', hp: 200 },
            { id: 3, name: 'ドラゴン', hp: 500 }
        ]
    },
    methods: {
        parentsMethod: function() {
            alert('イベントをキャッチ！')
        },
        handleAttack: function(id) {
            var item = this.list.find(function(el) {
                return el.id === id
            })
            if (item !== undefined && item.hp > 0) {
                item.hp -= 10
            }
        }
    }
})
