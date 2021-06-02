import './css/styles.css';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

import { error, success } from '@pnotify/core';

import api from './js/apiService';
import { refs } from './js/refs';

const { form, gallery } = refs;

import cardTemplate from './templates/itemCards.hbs';

form.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();

  api.searchQuery = event.currentTarget.elements.query.value;
  
  if (api.searchQuery === '') {
    return error({
      text: "You have not entered a request. Enter the correct data for your search!",
      type: 'error',
      delay: 2000,
    });
  }

  if (api.searchQuery !== event.currentTarget.elements.query.value) {
    api.resetPage();
    gallery.innerHTML = '';
  }

  api
    .fetchGallery()
    .then(response => response.data.hits)
    .then(list => renderMarkup(list));
  
  // renderMarkup(gallery, cardTemplate, list)

  // loadMoreBtn.show();
  // newsApiService.resetPage();
  // clearArticlesContainer();
  // fetchArticles();
}

  const renderMarkup = (list) => {
    const markup = cardTemplate(list);
    gallery.insertAdjacentHTML('afterbegin', markup);
  };