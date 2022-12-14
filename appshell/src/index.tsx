import 'piral/polyfills';
import { renderInstance } from 'piral';
import { layout, errors } from './layout';
import { createBlazorApi } from 'piral-blazor';

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = 'https://dev-api.casablanca.at/piral/api/v1/pilet/testing';

renderInstance({
  layout,
  errors,
  plugins: [
    createBlazorApi(),
  ],
  requestPilets() {
    return fetch(feedUrl)
      .then(res => res.json())
      .then(res => res.items);
  },
});
