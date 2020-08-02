import React from 'react';
import NewsList from '../components/NewsList';
import CategoriesUsedNavLink from '../components/CategoriesUsedNavLink';

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all';

  return (
    <>
      <CategoriesUsedNavLink />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
