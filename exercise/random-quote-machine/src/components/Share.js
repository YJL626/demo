export default {
  //接收一个命名与模板一致的插槽，并生成对应的节点，
  render(h) {
    let vm = this;
    let slotsList = Object.entries(this.$slots);
    //根据传入插槽动态生成节点和方法；
    let arr = slotsList.map(([key, value]) => {
      let nodeOption = {
        on: {
          click() {
            window.open(vm.shareURLData[key], "_blank", "resizable=yes");
          },
        },
      };
      //渲染成虚拟dom
      return h("div", nodeOption, value);
    });
    return h("div", arr);
  },
  data() {
    return {
      shareTemplate: {
        qzone:
          "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{URL}}&title={{TITLE}}&desc={{DESCRIPTION}}&summary={{SUMMARY}}&site={{SOURCE}}&pics={{IMAGE}}",
        qq:
          'http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&source={{SOURCE}}&desc={{DESCRIPTION}}&pics={{IMAGE}}&summary="{{SUMMARY}}"',
        weibo:
          "https://service.weibo.com/share/share.php?url={{URL}}&title={{TITLE}}&pic={{IMAGE}}&appkey={{WEIBOKEY}}",
        wechat: "javascript:",
        douban:
          "http://shuo.douban.com/!service/share?href={{URL}}&name={{TITLE}}&text={{DESCRIPTION}}&image={{IMAGE}}&starid=0&aid=0&style=11",
        linkedin:
          "http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{SUMMARY}}&source={{SOURCE}}&armin=armin",
        facebook: "https://www.facebook.com/sharer/sharer.php?u={{URL}}",
        twitter:
          "https://twitter.com/intent/tweet?text={{TITLE}}&url={{URL}}&via={{ORIGIN}}",
      },
    };
  },
  props: {
    config: {
      type: Object,
      default() {
        return { title: "test", url: "test11", desc: "测试用" };
      },
    },
  },
  computed: {
    shareURLData() {
      let vm = this;
      return Object.entries(this.shareTemplate).reduce((acc, [key, value]) => {
        acc[key] = value.replace(/\{\{(\w*)\}\}/g, function(match, p1) {
          p1 = p1.toLowerCase();
          return vm.config[p1] || "none";
        });
        return acc;
      }, {});
    },
  },
};
