import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import styles from '../scss/components/NewsList.scss';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsList = ({ category }) => {
    const [ loading, response, error ] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=4d574c5b1ace4baeae215808d3c852d3`);
    }, [category]);
    
    if(loading) {
        return <div className={styles.wrap}>대기 중...</div>;
    }
    
    if(!response) {
        return null;
    }
    
    if(error) {
        return <div className={styles.wrap}>에러 발생!</div>;
    }
    
    const { articles } = response.data;
    
    return (
        <div className={styles.wrap}>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </div>
    );
};

export default NewsList;
