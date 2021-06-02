import './css/styles.css';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

import { error, success } from '@pnotify/core';

import api from './js/apiService';
import { refs } from './js/refs';

const { input, gallery } = refs;

// import galleryCards from './templates/itemCards.hbs';


// function dataRequest(query) {
//   api.getGalleryItems().then(response => {
//     console.log(response.data);
//     return response.data;
//   });  
// }

input.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  
  if (api.searchQuery === '') {
    return error({
      text: "You have not entered a request. Enter the correct data for your search!",
      type: 'error',
      delay: 2000,
    });
  }

  if (api.searchQuery !== event.currentTarget.elements.query.value) {
    api.searchQuery = event.currentTarget.elements.query.value;  
  }


  // loadMoreBtn.show();
  // newsApiService.resetPage();
  // clearArticlesContainer();
  // fetchArticles();
}
