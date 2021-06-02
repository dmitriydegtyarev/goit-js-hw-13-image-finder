import getRefs from './get-refs.js';
import imgCardTmpl from '../templates/image-card.hbs';
import ImagesApiService from './images-service.js';

import LoadMoreBtn from './components/load-more-btn.js';
import onFetchError from './notification.js'

const refs = getRefs();

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

const imagesApiService = new ImagesApiService();

refs.searchForm.addEventListener('submit', onSearchImg);

loadMoreBtn.refs.button.addEventListener('click', () => {
  onLoadImgs();
  scrollToBottomPg();
});


function onSearchImg(e) {
  e.preventDefault();

  imagesApiService.query = e.currentTarget.elements.query.value;

  if (!imagesApiService.query) {
    return onFetchError();
  }
  loadMoreBtn.show();
  imagesApiService.resetPage();
  clearArticlesContainer();
  onLoadImgs();
}

function onLoadImgs() {
  loadMoreBtn.disable();

  imagesApiService.fetchImages()
  .then(hits => {
    renderImgCard(hits);
    loadMoreBtn.enable();
  });
}

function renderImgCard(hits) {
  const markup = imgCardTmpl(hits);
  refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}

function clearArticlesContainer() {
  refs.galleryContainer.innerHTML = '';
}

function scrollToBottomPg() {
  setTimeout(() => {
    loadMoreBtn.refs.button.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, 500);
}

refs.toTopBtn.addEventListener('click', onMoveToTop);

window.onscroll = function () {
  if (window.pageYOffset > 580) {
    refs.toTopBtn.style.display = 'block';
  } else {
    refs.toTopBtn.style.display = 'none';
  }
};

function onMoveToTop() {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 500);
}