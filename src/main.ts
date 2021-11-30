import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";

import * as apolloProvider from "./graphql/apollo.provider";

const app = createApp(App);
app.use(apolloProvider.provider);

app.use(store);
app.use(router);
app.mount("#app");
