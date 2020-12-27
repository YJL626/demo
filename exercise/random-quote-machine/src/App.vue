<template>
  <div class="app">
    <QuoteContainer :quoteData="quoteData" class="quote-container" />
  </div>
</template>

<script>
import { getQuote } from "network/request.js";
import QuoteContainer from "@/components/QuoteContainer.vue";

export default {
  name: "App",
  async created() {
    this.quoteData = await getQuote("时间 ");
  },
  data() {
    return {
      quoteData: null,
    };
  },
  props: {},
  methods: {},
  components: {
    QuoteContainer,
  },
};
</script>

<style lang="scss" scoped>
.app {
  background: #eee;
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