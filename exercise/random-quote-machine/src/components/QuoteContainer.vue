<template>
  <div class="container">
    <p v-if="quoteData">{{ quoteData.content }}</p>
    <p v-if="quoteData" class="author">- {{ quoteData.author }}</p>
    <div class="button-container">
      <Share :aa="11">
        <template v-slot:qq>
          <div>1111</div>
        </template>
                <template v-slot:weibo>
          <div>aa</div>
        </template>
      </Share>
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
  box-sizing: border-box;
  min-height: 100px;
  width: 80vw;
  max-width: 300px;
  background: #fff;
  border-radius: 5px;
  padding: 15px 10px 5px 15px;
  .author {
    text-align: right;
  }
}
</style>