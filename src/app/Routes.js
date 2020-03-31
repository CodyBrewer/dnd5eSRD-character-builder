import Home from '../features/home';
import Creation from '../features/creation';

const Routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path:'/create',
    component: Creation,
  }
];

export default Routes;
