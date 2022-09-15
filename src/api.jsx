import mockFetch from './mock-fetch';

export default function getArticles() {
  return mockFetch('/articles');
}
