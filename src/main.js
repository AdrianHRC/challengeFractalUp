import { createApp } from 'vue'
import App from './App.vue'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './views/Home.vue'
import vista1 from './views/Vista1.vue'
import vista2 from './views/Vista2.vue'
const apolloClient = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/Vista1', component: vista1 },
    { path: '/Vista2', component: vista2 }
  ],
});
createApp(App)
  .use(router)
  .provide(DefaultApolloClient, apolloClient)
  .mount('#app');
