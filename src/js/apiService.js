import axios from 'axios';

const API_KEY = '21893871-c16b87b2a4653cca508137d28';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export default class PixabayApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  get page() {
    return this.page;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;    
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  async getGalleryItems() {
    
    const response = await axios.get(
      `?image_type=photo&orientation=horizontal&q=${this.query}g&page=${this.page}&per_page=12&key=${API_KEY}`
    );

    return response
      .json()
      .then(({ hits }) => {
        this.incrementPage();

        return hits;
      })
      .catch(err => {
        console.warn(err);
      });
  }
}