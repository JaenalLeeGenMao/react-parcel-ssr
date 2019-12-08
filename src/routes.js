import importedComponent from 'react-imported-component';

import HelloWorld from './containers/helloWorld';
const HelloWorld2 = importedComponent(() => import('./containers/helloWorld2'));

const routes = [
  { path: '/', exact: true, component: HelloWorld },
  { path: '/CodeSplit', exact: true, component: HelloWorld2 }
];

export default routes;
