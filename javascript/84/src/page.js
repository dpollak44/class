import $ from 'jquery';

const titleElem = $('#title');
const contentsElem = $('#content');

export default function setPage(page) {
    titleElem.text(page.title);
    contentsElem.empty().append(page.content);
}