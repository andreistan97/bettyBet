import './views/login';
import './views/home';
import './views/register';
import './views/profile';
import './views/support';
import './views/league';

import { Router } from '@vaadin/router';

const basicRoutes = [
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

const createRoutes = async () => {
  const myUrl = 'http://localhost:3000/showLeagues';
  const response = await fetch(myUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const jsonData = await response.json();
  console.log(jsonData);
  console.log(jsonData.forEach(obj => console.log(obj.id)));
  const leagueIds = [];
  jsonData.forEach(obj => leagueIds.push(obj.id));
  const locationsPaths = [];
  leagueIds.forEach(id => {
    locationsPaths.push({
      path: `/league/${id}`,
      component: 'click-league',
    });
  });
  return locationsPaths;
};
const dynamicPaths = await createRoutes();
const routes = basicRoutes.concat(dynamicPaths);

const main = document.querySelector('main');

export const router = new Router(main).setRoutes(routes);
console.log(routes);
