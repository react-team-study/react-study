import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import styles from '../scss/components/NewsList.scss';
import axios from 'axios';

const NewsList = ({ category }) => {
    const [ articles, setArticles ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === 'all' ? '' : `&category=${category}`;
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=4d574c5b1ace4baeae215808d3c852d3`);
                setArticles(response.data.articles);
            }
            catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, [category]);
    
    if(loading) {
        return <div className={styles.wrap}>대기 중...</div>;
    }
    
    if(!articles) {
        return null;
    }
    
    return (
        <div className={styles.wrap}>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </div>
    );
};

export default NewsList;
