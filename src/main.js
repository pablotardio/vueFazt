// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.config.productionTip = false

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Test from './components/Test'
import User from './components/User'

const router=new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: User
        },
        {
           path: '/test' ,
           component: Test
        }
    ]
})

    /* ebslint-disable no-new */
new Vue({
    // el: '#app', Reemplazado por mounted
    components: { App },
    template: '<App/>'
})