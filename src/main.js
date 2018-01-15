import './index.html'
import app from './app.vue'
import Vue from 'vue'

document.write("hello!")

new Vue({
    el: '#app',
    render: h => h(app),
})