import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

class PixabayApiService {
  #key_api = '21893871-c16b87b2a4653cca508137d28';

  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get currentPage() {
    return this.page;
  }

  set currentPage(newPage) {
    this.page = newPage;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  fetchGallery = () =>
    axios.get(
      `?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.#key_api}`);
    

  getGalleryItems = () =>
    fetchGallery().then(response => console.log(response.data.hits));
  
      // transformImgList = dataList =>
  //   dataList.map(item => ({
  //     largeImageURL: item.largeImageURL,
  //     webformatURL: item.webformatURL,
  //     tags: item.tags,
  //   }));
}

const api = new PixabayApiService();

export default api;