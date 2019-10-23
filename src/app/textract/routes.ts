import { RouteConfig } from 'vue-router/types/router';

export const TextractRoutes: RouteConfig[] = [
  {
    path: '/textract',
    name: 'textract',
    component: () => import(/* webpackChunkName: "textract" */ './Textract/Textract.vue').then((m: any) => m.default),
  },
];
