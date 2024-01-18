import { createElement as h, createRoot } from './lib/EUID.js';

const appElement = h(
  'div',
  {
    id: 'app',
    'data-type': 'application',
  },
  h('h1', {}, '안녕!', h('br'), '리액트.'),
  h('p', { 'data-id': 'slogan' }, '리액트는....')
);

createRoot(document.querySelector('#root')).render(appElement);

const buttonElement = document.querySelector('.getOutReact__button');

buttonElement.addEventListener('click', () => {
  createRoot(document.querySelector('#root')).unmount();
});
