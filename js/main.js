import { renderGallery } from './gallery.js';
import './form.js';
import { loadPictures } from './api.js';
import { showErrorMessage } from './util.js';
import { initFilter, debouncedRepaint } from './filters.js';

const bootstrap = async() => {
  try {
    const pictures = await loadPictures();
    renderGallery(pictures);
    initFilter(pictures, debouncedRepaint);
  } catch (error) {
    showErrorMessage();
  }
};

bootstrap();
