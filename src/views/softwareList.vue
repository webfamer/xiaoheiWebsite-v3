<template>
  <div class="software">
    <div class="software-c">
      <!-- <ul class="nav">
        <li>
          <a href="http://kuan.91miandan.top">软件汇总</a>
        </li>
        /
        <li>{{ menuName }}</li>
      </ul> -->
      <van-nav-bar
        :title="menuName"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="title">
        <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
          有事联系酷安昵称：滑稽用户工号9527/wechat:liyini321
        </van-notice-bar>
      </div>
      <div class="searchInput">
        <van-search
          v-model="searchValue"
          shape="round"
          @search="getSoftWareList"
          background="#1885A6"
          placeholder="请输入搜索关键词"
        />
      </div>
      <div class="menu" v-for="(item, index) in softwareInfo" :key="index">
        <div class="main" @click="goDetail(item)">
          <div class="menu-l">
            <van-image width="128px" height="128px" :src="item.logo" />
          </div>
          <div class="menu-r">
            <h3>{{ item.name }}</h3>
            <p class="wrap">
              {{ String(item.description).substr(0, 28) }}.....
            </p>
            <p>
              开发者：<van-button type="primary" size="mini"
                >滑稽用户9527</van-button
              >
            </p>
          </div>
        </div>
        <div class="downsoft" @click="downsoftware(item.downloadUrl)">
          立即下载
        </div>
      </div>
      <div class="toTop" v-show="isShowTopBtn" @click="goTop">
        <van-image round width="1rem" height="1rem" :src="topIcon" />
      </div>
    </div>
  </div>
</template>

<script>
// import softApi from "../api/api";
import { reactive, ref, toRefs, toRaw, computed } from "vue";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getSoftwareListAPi } from "@/api/software";
import { Toast } from "vant";
import topIcon from "@/assets/imgs/toTop.png";
export default {
  setup() {
    const data = reactive({
      softwareInfo: [],
      searchValue: "",
      menuName: "",
      page: 1,
      pageSize: 10,
      topIcon: topIcon,
      isShowTopBtn: false,
    });
    const route = useRoute();
    const router = useRouter();
    onMounted(() => {
      getSoftWareList();
      onScrollData();
    });
    const onClickLeft = () => history.back();
    const debounce = (func, time) => {
      let timer;
      return function () {
        let arg = arguments;
        let context = this;
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          func.apply(context, arg);
        }, time);
      };
    };
    const downsoftware = (url) => {
      console.log(toRaw(url));
      window.open(toRaw(url));
    };
    const getSoftWareList = () => {
      const { type, menuName } = route.query;
      data.menuName = menuName;
      let params = {
        page: data.page,
        pageSize: data.pageSize,
        type: Number(type),
        name: data.searchValue,
      };
      getSoftwareListAPi(params).then((res) => {
        if (res.list.length > 0) {
          data.softwareInfo = res.list;
        }
      });
    };
    const onScrollData = debounce(() => {
      let loading = true;
      window.onscroll = async () => {
        if (route.path !== "/softwareList") {
          return;
        }
        let isOnBottom =
          window.innerHeight + document.documentElement.scrollTop + 30 >
          document.documentElement.scrollHeight;
        console.log(loading);
        console.log(
          window.innerHeight,
          document.documentElement.scrollTop,
          document.documentElement.scrollHeight
        );
        if (loading && isOnBottom) {
          data.page++;
          let params = {
            page: data.page,
            pageSize: data.pageSize,
            type: Number(route.query.type),
            name: data.searchValue,
          };
          getSoftwareListAPi(params).then((res) => {
            if (res.list.length === 0) {
              loading = false;
              Toast.fail("无更多数据");
            } else {
              data.softwareInfo = [...data.softwareInfo, ...res.list];
              loading = true;
            }
          });
        }
        showTopBtn(); //是否显示回到顶部按钮
        console.log(document.documentElement.scrollTop, "卷曲的顶部");
      };
    }, 500);
    const showTopBtn = () => {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 140) {
        data.isShowTopBtn = true;
      } else {
        data.isShowTopBtn = false;
      }
    };
    const goTop = () => {
      let timer = setInterval(() => {
        let scrollTop = document.documentElement.scrollTop;
        document.documentElement.scrollTop = scrollTop - 40;
        if (scrollTop < 30) {
          clearInterval(timer);
        }
      }, 10);
    };
    const goDetail = (data) => {
      router.push({
        path: "/softwareDetail",
        query: { id: data.id },
      });
    };
    return {
      ...toRefs(data),
      getSoftWareList,
      onClickLeft,
      goTop,
      downsoftware,
      goDetail,
    };
  },
};
</script>

<style scoped lang="scss">
.wrap {
  table-layout: fixed;

  word-wrap: break-all;

  word-break: normal;

  overflow: hidden;
}
.software {
  background: #f0f3f4;
  .software-c {
    margin: 0 auto;
    width: 345px;
  }
  .toTop {
    position: fixed;
    bottom: 0.7rem;
    right: 0.373333rem;
  }
  .nav {
    background: #fff;
    height: 36px;
    color: #777;
    border-radius: 10px;
    text-align: left;
    box-sizing: border-box;
    font-size: 14px;
    padding: 8px;
    li {
      display: inline;
    }
  }
  .title {
    background: #fff;
    border-radius: 10px;
  }
  .menu {
    margin-top: 15px;
    min-height: 168px;
    .main {
      background: #fff;
      padding-left: 20px;
      display: flex;
      min-height: 160px;
      border-radius: 10px 10px 0px 0px;
      align-items: center;
      .menu-l {
        padding-right: 15px;
      }
      .menu-r {
        h3 {
          margin: 20px 0 12px;
          font-size: 18px;
          line-height: 1.3;
          text-align: left;
        }
        p {
          text-align: left;
          width: 157px;
          margin: 0 0 10px;
          font-size: 14px;
          line-height: 16px;
        }
      }
    }
    .downsoft {
      padding: 12px 20px;
      background-color: #1885a6;
      overflow: hidden;
      border-radius: 0px 0px 12px 12px;
      font-weight: 700;
      font-size: 16px;
      color: #fff;
    }
  }
}
</style>
