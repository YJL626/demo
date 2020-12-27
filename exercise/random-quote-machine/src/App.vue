<template>
  <div class="app" :style="{ background: tint }">
    <QuoteContainer
      :quoteData="quoteData"
      class="quote-container"
      :tint="tint"
      @get-new-quote="getNewQuote"
    />
  </div>
</template>

<script>
import { getQuote } from "network/request.js";
import QuoteContainer from "@/components/QuoteContainer.vue";
let getRandom = require("lodash/random");
export default {
  name: "App",
  async created() {
    this.tint = this.getRandomColor();
    this.quoteData = await getQuote("时间 ");
  },
  data() {
    return {
      quoteData: null,
      tint: "rgb(10,10,10)",
      colorChangeAimationId: null,
    };
  },
  props: {},
  methods: {
    async getNewQuote() {
      if (this.colorChangeAimationId) return; //有正在运行的动画return
      let vm = this;
      let targetColor = [
        getRandom(0, 255),
        getRandom(0, 255),
        getRandom(0, 255),
      ];
      let oldColor = this.tint.match(/\d+/g).map((item) => +item);

      let colorDifference = targetColor.map(
        (item, index) => item - oldColor[index]
      );
      let changeDuration = 3680;
      let startTime = performance.now();
      this.colorChangeAimationId = requestAnimationFrame(
        function slowChangeColor(ms) {
          let changeRatio = (ms - startTime) / changeDuration;
          changeRatio = Math.min(changeRatio, 1);
          let newColor = oldColor.map(
            (item, index) => item + colorDifference[index] * changeRatio
          );
          vm.tint = `rgb(${newColor[0]},${newColor[1]},${newColor[2]})`;
          if (Math.abs(changeRatio) >= 1) {
            vm.colorChangeAimationId = null;
            return;
          }
          requestAnimationFrame(slowChangeColor);
        }
      );
      this.quoteData = await getQuote("时间 ");
    },
    getRandomColor() {
      return `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(
        0,
        255
      )})`;
    },
  },
  components: {
    QuoteContainer,
  },
};
</script>

<style lang="scss" scoped>
.app {
  background: rgb(245, 245, 245);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .img {
    position: absolute;
    align-self: flex-end;
  }
}
</style>