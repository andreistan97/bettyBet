import './views/login';
import './views/home';
import './views/register';
import './views/profile';
import './views/support';

import { Router } from '@vaadin/router';

const Routes = [
  {
    path: '/',
    component: 'login-view',
  },
  {
    path: '/register',
    component: 'register-view',
  },
  {
    path: '/home',
    component: 'home-view',
  },
  {
    path: '/profile',
    component: 'profile-view',
  },
  {
    path: '/support',
    component: 'support-view',
  },
  {
    path: '/romania',
    component: 'romania-view',
  },
  {
    path: '/spain',
    component: 'spain-view',
  },
  {
    path: '/germany',
    component: 'germany-view',
  },
  {
    path: '/france',
    component: 'france-view',
  },
  {
    path: '/england',
    component: 'england-view',
  },
  {
    path: '/italy',
    component: 'italy-view',
  },
];

const main = document.querySelector('main');

export const router = new Router(main).setRoutes(Routes);
