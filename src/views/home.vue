<template>
  <div :style="backgroundDiv" class="app">
    <div class="banner">
      <van-swipe class="my-swipe" indicator-color="white">
        <van-swipe-item
          ><img
            src="../assets/imgs/xiaohei.png"
            alt=""
            style="width: 100%; height: 10%"
            @click="gotoShop"
        /></van-swipe-item>
        <van-swipe-item
          ><img
            src="../assets/imgs/goshop.png"
            alt=""
            style="width: 100%; height: 10%"
            @click="joinUs"
        /></van-swipe-item>
        <!-- <van-swipe-item><span class="bannerWord" style="display:block;height:10%">qq群：582978931</span></van-swipe-item> -->
      </van-swipe>
    </div>
    <van-grid square :column-num="3" icon-size="38">
      <van-grid-item
        v-for="(item, index) in dataList"
        :key="index"
        :icon="item.icon"
        :text="item.name"
        @click="goList(item)"
      />
    </van-grid>
    <p class="joinUs" @click="joinUs">加入我们</p>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import bgImg from "@/assets/imgs/1.jpg";
export default {
  setup() {
    const data = reactive({
      backgroundDiv: {
        backgroundImage: "url(" + bgImg + ")",
      },
      dataList: [
        {
          type: 1,
          name: "软件汇总",
          url: window.location.href + "software",
          icon: "cluster",
        },
        {
          name: "小说专区",
          url: "https://91miandan.lanzoui.com/b00nmpg1i",
          icon: "column",
        },
        {
          name: "破解游戏",
          url: "https://91miandan.lanzoui.com/b00nmpggd",
          icon: "smile",
        },
        {
          name: "影视专区",
          url: "https://91miandan.lanzoui.com/b00nmpgli",
          icon: "video",
        },
        {
          name: "游戏辅助",
          url: "https://91miandan.lanzoui.com/b00nmpiuj",
          icon: "fire",
        },
        {
          name: "QQ工具",
          url: "https://91miandan.lanzoui.com/b00nmpixc",
          icon: "comment-circle",
        },
        {
          name: "秋名山",
          url: "https://91miandan.lanzoui.com/b00nmpjaf",
          icon: "friends",
        },
        {
          name: "实用工具",
          url: "https://91miandan.lanzoui.com/b00nmpjje",
          icon: "audio",
        },
        {
          name: "音乐专区",
          url: "https://91miandan.lanzoui.com/b00nmpjxi",
          icon: "music",
        },
      ],
    });
    const Router = useRouter();
    const goList = (data) => {
      Router.push({
        path: "/softwareList",
        query: { type: data.type, menuName: data.name },
      });
    };
    return { ...toRefs(data), goList };
  },
};
</script>

<style lang="scss" scoped>
.app {
  height: 100vh;
  background: no-repeat;
  background-size: cover;
  background-position: center;
}
.bannerWord {
  width: 100%;
  height: 178px;
}

.banner {
  padding-top: 15px;
  margin-bottom: 5px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 10px;
  /* line-height: 115px; */
  text-align: center;
}
// /deep/.van-grid-item--square{
//   opacity: .9;
// }
// /deep/.van-grid-item__text{
//   font-size: 18px;
// }
.joinUs {
  position: fixed;
  bottom: 0.266667rem;
  left: 50%;
  color: #fff;
  margin-left: -10px;
  background: rgba(40, 61, 126, 0.7);
  border-radius: 8px;
  text-align: center;
}
</style>