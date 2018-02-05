import app from './app.vue'
import Vue from 'vue'
import galite from 'ga-lite'
import '../index.html'

new Vue({
    el: '#app',
    render: h => h(app),
})

// Google analytics
galite('create', 'UA-109180894-1', 'auto');
galite('send', 'pageview');
