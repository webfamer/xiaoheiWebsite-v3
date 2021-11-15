<template>
  <div class="moreBg">
    <van-nav-bar
      :title="softwareInfo.name"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="container">
      <van-image :src="softwareInfo.detailImg" />
        <p class="detailWord">
          简介：
        {{softwareInfo.description}}

        </p>
    </div>
         <div class="downsoft" @click="downsoftware(softwareInfo.downloadUrl)">
          立即下载
        </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, onMounted } from "vue";
import { getSoftwareDetailAPi } from "@/api/software";
import { useRoute } from "vue-router";
import bgImg from "@/assets/imgs/1.jpg";
export default {
  setup() {
    const data = reactive({
      backgroundDiv: {
        backgroundImage: "url(" + bgImg + ")",
      },
      softwareInfo: {},
    });
    onMounted(() => {
      getSoftwareDetail();
    });
    const onClickLeft = () => history.back();
    const route = useRoute();
    const getSoftwareDetail = () => {
      const { id } = route.query;
      let params = { id: Number(id) };
      getSoftwareDetailAPi(params).then((res) => {
        console.log(res);
        data.softwareInfo = res.list[0];
      });
    };
    const downsoftware = (url) => {
      window.open(url);
    };
    return { ...toRefs(data), onClickLeft,downsoftware };
  },
};
</script>

<style lang="scss" scoped>
.moreBg {
  background: #f0f3f4;
  .container {
    box-sizing: border-box;
    padding: 10px;
      background: #fff;
    .detailWord {
      font-size: 16px;
      text-align: left;
    }
  }
}
.app {

  background: no-repeat;
  background-size: cover;
  background-position: center;
}


// /deep/.van-grid-item--square{
//   opacity: .9;
// }
// /deep/.van-grid-item__text{
//   font-size: 18px;
// }
    .downsoft {
      padding: 12px 20px;
      bottom: 0;
      background-color: #1885a6;
      overflow: hidden;
      text-align: center;
      border-radius: 0px 0px 12px 12px;
      font-weight: 700;
      font-size: 16px;
      position: fixed;
      bottom:0;
      width: 90%;
      color: #fff;
    }
</style>