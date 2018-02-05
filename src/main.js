import app from './app.vue'
import Vue from 'vue'
import '../index.html'

new Vue({
    el: '#app',
    render: h => h(app),
})
