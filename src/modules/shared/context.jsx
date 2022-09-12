import React, { useState, createContext, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import articles from '../Home/constants';
import getArticles from '../../api';

const ArticleContext = createContext({
  appliedFilter: {
    search: '',
    categories: [],
  },
});

export function ArticleContextProvider({ children }) {
  const [appliedFilter, setAppliedFilter] = useState({
    search: '',
    categories: [],
  });

  const filters = [
    (article) =>
      article.title.toLowerCase().includes(appliedFilter.search.toLowerCase()),
    (article) =>
      appliedFilter.categories.length === 0 ||
      appliedFilter.categories.some((category) =>
        article.category.toLowerCase().includes(category.toLowerCase()),
      ),
  ];

  const filtredArticles = articles.filter((article) =>
    filters.every((fn) => fn(article)),
  );

  useEffect(() => {
    getArticles();
  }, [appliedFilter]);

  const value = React.useMemo(
    () => ({
      appliedFilter,
      setAppliedFilter,
      filtredArticles,
    }),
    [appliedFilter, filtredArticles],
  );

  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  );
}

ArticleContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export const useArticleContext = () => useContext(ArticleContext);
