import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  routes
} from './router'

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
  mode: 'history',
  base: process.env.BASE_URL,
  routes
};

export const router = new VueRouter(RouterConfig);