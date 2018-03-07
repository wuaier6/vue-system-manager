// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import i18n from './plugin/i18n'
import store from './store'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'     // 默认主题
import './plugin'


Vue.use(ElementUI);
new Vue({
	i18n,
	store,
    router,
    render: h => h(App)
}).$mount('#app');