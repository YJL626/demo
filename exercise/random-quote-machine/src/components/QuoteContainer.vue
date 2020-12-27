<template>
  <div class="container">
    <div class="quote">
      <p v-if="quoteData">{{ quoteData.content }}</p>
      <p v-else>数据请求异常</p>
      <p v-if="quoteData" class="author">- {{ quoteData.author }}</p>
    </div>
    <div class="button-container">
      <Share class="share">
        <template v-slot:qq>
          <img
            :style="{ background: tint }"
            class="logo qq-logo"
            src="~@/assets/logo/qq.png"
            alt=""
            ref="color"
          />
        </template>
        <template v-slot:weibo>
          <img
            :style="{ background: tint }"
            class="logo weibo-logo"
            src="~@/assets/logo/weibo.png"
            ref="color1"
          />
        </template>
      </Share>
      <button
        :style="{ background: tint }"
        class="new-quote"
        @click="$emit('get-new-quote')"
        ref="color2"
      >
        new quote
      </button>
    </div>
  </div>
</template>

<script>
import Share from "@/components/Share";

export default {
  name: "QuoteContainer",
  created() {
    let startTime = performance.now();
    let currentImage = 0;
  },
  data() {
    return {};
  },
  props: {
    quoteData: {
      type: Object,
    },
    tint: {
      default: "#eee",
    },
  },
  methods: {},
  computed: {
    shareHREFList() {
      let list = [];
    },
  },
  components: {
    Share,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-rows: 1fr 50px;
  box-sizing: border-box;
  width: 90vw;
  max-width: 300px;
  min-height: 100px;

  background: #fff;
  border-radius: 5px;
  padding: 15px 10px 5px 15px;

  .author {
    text-align: right;
  }
  .button-container {
    bottom: 0;
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    .share {
      display: flex;
      .logo {
        box-sizing: border-box;
        padding: 2.86px;
        margin: 0 5px 0 0;
        border-radius: 5px;
        background: #eee;
        width: 40px;
        height: 40px;
        cursor: pointer;
      }
    }
    .new-quote {
      cursor: pointer;
      height: 40px;
      margin-left: auto;
      outline: none;
      border: none;
      border-radius: 5px;
      background: #eee;
      color: #fff;
    }
  }
}
</style>