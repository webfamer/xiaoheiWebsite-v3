import { createApp } from 'vue'
import App from './App.vue'
import { Button, Swipe, SwipeItem, Grid, GridItem, Image as VanImage, NoticeBar, Search, Tabbar, TabbarItem, NavBar, Form, Field } from 'vant';
import router from '@/router/index.js'
// 计算设置rem的基准值，即html的font-size
import 'amfe-flexible'
createApp(App).use(Button).use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(router).use(VanImage).use(NoticeBar).use(Search).use(Tabbar).use(TabbarItem).use(NavBar).use(Field).use(Form).mount('#app')


//百度统计代码

var _hmt = _hmt || [];
window._hmt = _hmt; // 修改为window 全局变量
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?f089ba22bcc9f37d1aa1e2af05954a5a";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

router.beforeEach((to, from, next) => {
  if (window._hmt) {
    if (to.path) {
      window._hmt.push(['_trackPageview', '/#' + to.fullPath])
    }
  }
  next()
})
