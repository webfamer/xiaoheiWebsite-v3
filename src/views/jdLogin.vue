<template>
  <div class="software">
    <van-image width="100%" height="200" :src="bgImg" />

    <div class="software-c">
      <van-form @submit="onSubmit">
        <van-field
          v-model="jdCookie"
          name="JDCOOKIE"
          label="京东COOKIE"
          placeholder="JDCOOKIE"
          :rules="[{ required: true, message: '请填写京东COOKIE' }]"
        />
        <van-field
          v-model="remarks"
          type="remarks"
          name="备注"
          label="备注"
          placeholder="备注"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, onMounted } from "vue";
import axois from "axios";
import { useRoute, useRouter } from "vue-router";
import { getQinglongTokenAPi } from "@/api/qinglong";
import { Toast } from "vant";
import bgImg from "@/assets/imgs/bj.png";
export default {
  setup() {
    const data = reactive({
      bgImg,
      remarks: "",
      jdCookie: "",
      bearToken:
        "Bearer eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoibXFRdTVueWZrSlJKYi1QOEVmOTI4M0lRUVNvU1R1Y0g5VW15YktZZGJLMC1haU83aVBOWXpJaXlHUSM2Z0RZZVlkWjlycWMtbk0iLCJpYXQiOjE2MzU2NzQ5MjIsImV4cCI6MTYzNTkzNDEyMn0.XszgcWwXp7m0jdQHgtA__eUjBRGMLQpQMNiLH_d1Nwvri7g0D6nPRPFPn4P3zIM6",
    });

    const getBearToken = () => {
      getQinglongTokenAPi().then((res) => {
        if (res.list.length > 0) {
          data.bearToken = res.list[0].token;
        }
      });
    };
    onMounted(() => {
      getBearToken();
    });
    const onSubmit = () => {
      console.log(123);
      axois({
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: `Bearer ${data.bearToken}`,
        },
        method: "post",
        url: "http://42.193.174.155:5700/api/envs",
        data: {
          name: "JD_COOKIE",
          value: data.jdCookie,
          remarks: data.remarks,
        },
      }).then((res) => {
        console.log(res, "123");
        if (res.data.code == 200) {
          Toast.success("提交成功");
        } else {
          Toast.fail("提交失败");
        }
      });
    };
    return { ...toRefs(data), onSubmit };
  },
};
</script>

<style scoped lang="scss">
.software {
  background: #f0f3f4;
  .software-c {
    margin: 0 auto;
    width: 345px;
    height: 100vh;
  }
}
</style>
