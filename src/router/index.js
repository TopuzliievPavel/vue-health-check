import Vue from 'vue'
import VueRouter from 'vue-router'

export const MainPage = () => import(/* webpackChunkName: 'MainPage' */ '@/layout/pages/main-page/main-page.vue');
export const SignIn = () => import(/* webpackChunkName: "SignIn" */ '@/layout/pages/sign-in/sign-in.vue');
export const SignUp = () => import(/* webpackChunkName: "SignUp" */ '@/layout/pages/sign-up/sign-up.vue');
export const TestPage = () => import(/* webpackChunkName: "TestPage" */ '@/layout/pages/test-page/test-page.vue');
export const RestorePage = () => import(/* webpackChunkName: "RestorePage" */ '@/layout/pages/restore-page/restore-page.vue');
export const VerifyPage = () => import(/* webpackChunkName: "VerifyPage" */ '@/layout/pages/verify-page/verify-page.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    // route level code-splitting
    // this generates a separate chunk (onboarding.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignIn
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (onboarding.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignUp
  },
  {
    path: '/test',
    name: 'TestPage',
    // route level code-splitting
    // this generates a separate chunk (onboarding.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: TestPage
  },
  {
    path: '/restore',
    name: 'RestorePage',
    // route level code-splitting
    // this generates a separate chunk (onboarding.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: RestorePage
  },
  {
    path: '/verify',
    name: 'VerifyPage',
    // route level code-splitting
    // this generates a separate chunk (onboarding.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: VerifyPage
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
