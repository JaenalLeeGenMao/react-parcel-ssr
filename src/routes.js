import importedComponent from 'react-imported-component';

import HelloWorld from './containers/helloWorld';
import HelloWorld2 from './containers/helloWorld2';
// const HelloWorld2 = importedComponent(() => import('./containers/helloWorld2'));

const routes = [
  { path: '/', exact: true, component: HelloWorld },
  { path: '/example', exact: true, component: HelloWorld2 }
];

export default routes;
