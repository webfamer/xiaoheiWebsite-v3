import { createApp } from 'vue'
import App from './App.vue'
import { Button, Swipe, SwipeItem, Grid, GridItem, Image as VanImage, NoticeBar, Search, Tabbar, TabbarItem, NavBar, Form, Field } from 'vant';
import router from '@/router/index.js'
// 计算设置rem的基准值，即html的font-size
import 'amfe-flexible'
createApp(App).use(Button).use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(router).use(VanImage).use(NoticeBar).use(Search).use(Tabbar).use(TabbarItem).use(NavBar).use(Field).use(Form).mount('#app')
