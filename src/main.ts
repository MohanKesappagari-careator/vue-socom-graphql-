import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import { provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";

import * as apolloProvider from "./graphql/apollo.provider";

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloProvider.provider.defaultClient);
  },

  render: () => h(App),
});
app.use(apolloProvider.provider);

app.use(store);
app.use(router);
app.mount("#app");
