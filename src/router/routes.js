import { authStore } from 'stores/authStore.js';


const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/ProductsPage.vue')
      },
      {
        path: '/create-product',
        component: () => import('pages/CreateProductPage.vue'),
        beforeEnter: (to, from, next) => authStore().ifAuthenticated(to, from, next)
      },
      {
        path: '/baskets',
        name: 'baskets',
        component: () => import('pages/BasketsPage.vue')
      }
    ],
    beforeEnter: (to, from, next) => authStore().ifAuthenticated(to, from, next)
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
