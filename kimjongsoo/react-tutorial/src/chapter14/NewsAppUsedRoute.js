import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const NewsAppUsedRoute = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default NewsAppUsedRoute;
