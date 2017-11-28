import Vue from 'vue'
import App from './App'
// import "vueify/lib/insert-css" // required for .vue file <style> tags

Vue.config.productionTip = false

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
