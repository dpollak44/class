import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';
import $ from 'jquery';
import './index.css';

import showBlogList from './blogList';

/*setPage({
    title: 'The Great PCS Blog',
    content: $('<h1>It works!</h1>')
});*/

showBlogList();

$('#home').click(e => {
    e.preventDefault();
    showBlogList();
});