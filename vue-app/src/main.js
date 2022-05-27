import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

const hello = "Hello";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
