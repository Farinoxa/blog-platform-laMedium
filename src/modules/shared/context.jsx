import { createContext } from 'react';

const dataContext = createContext({
  search: '',
  categories: [],
});

export default dataContext;
