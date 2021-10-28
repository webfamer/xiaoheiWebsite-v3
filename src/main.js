import { createApp } from 'vue'
import App from './App.vue'
import { Button, Swipe, SwipeItem, Grid, GridItem, Image as VanImage, NoticeBar } from 'vant';
import router from '@/router/index.js'
// 计算设置rem的基准值，即html的font-size
import 'amfe-flexible'
createApp(App).use(Button).use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(router).use(VanImage).use(NoticeBar).mount('#app')
