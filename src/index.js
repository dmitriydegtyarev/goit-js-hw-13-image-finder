import './css/styles.css';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';


import api from './js/apiService';
import { refs } from './js/refs';

import { error, success } from '@pnotify/core';

// import itemCards from './templates/itemCards.hbs';

const { input, gallery } = refs;

// function dataRequest(query) {
//   api.getGalleryItems().then(response => {
//     console.log(response.data);
//     return response.data;
//   });  
// }

// input.addEventListener('submit', onSearch);

// function onSearch(event) {
//   event.preventDefault();

//   api.query = event.currentTarget.elements.query.value;

//   if (api.query === '') {
//     error({
//       text: "You have not entered a request. Enter the correct data for your search!",
//       type: 'error',
//       delay: 2000,
//     });
//   }

//   // loadMoreBtn.show();
//   // newsApiService.resetPage();
//   // clearArticlesContainer();
//   // fetchArticles();
// }
