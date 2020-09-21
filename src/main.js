import Vue from "vue";
import VueResource from "vue-resource";
import Bootstrap from "bootstrap-vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueResource);
Vue.use(Bootstrap);
Vue.http.options.root = "https://vue-test-63ef1.firebaseio.com/data.json";
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == "POST") {
    request.method = "PUT";
  }
  next((res) => {
    res.json = () => {
      return { resMessage: res.body };
    };
  });
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
