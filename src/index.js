import './css/styles.css';
import '../node_modules/material-design-icons/iconfont/material-icons.css';

import PixabayApiService from './js/apiService';
import { refs } from './js/refs';

const api = new PixabayApiService();

// import itemCards from './templates/itemCards.hbs';

const { input, gallery } = refs;

api.getGalleryItems().then(response => console.log(response.data));