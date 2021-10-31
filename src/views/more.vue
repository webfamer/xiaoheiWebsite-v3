<template>
  <div class="moreBg">
    <van-nav-bar
      title="更多"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div>
      <img
        src="http://wx.91miandan.top/wxqun.jpg"
        alt=""
        style="width: 100%; height: 70%"
      />
    </div>
    <van-tabbar v-model="Tabactive">
      <van-tabbar-item name="home" icon="home-o" to="/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item name="more" icon="search" to="/more"
        >更多</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from "vue";
import { useRouter } from "vue-router";
import bgImg from "@/assets/imgs/1.jpg";
export default {
  setup() {
    const data = reactive({
      backgroundDiv: {
        backgroundImage: "url(" + bgImg + ")",
      },
    });
    const Tabactive = ref("more");
    const onClickLeft = () => history.back();
    const Router = useRouter();
    const goList = (data) => {
      Router.push({
        path: "/softwareList",
        query: { type: data.type, menuName: data.name },
      });
    };
    return { ...toRefs(data), goList, Tabactive, onClickLeft };
  },
};
</script>

<style lang="scss" scoped>
.moreBg {
  background: #f0f3f4;
  height: 100vh;
}
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