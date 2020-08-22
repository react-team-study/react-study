import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import styled from 'styled-components';
import axios from 'axios';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    width: 768px;
    margin: 2rem auto 3rem;
    
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 1rem;
    }
`;

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
        return <NewsListBlock>대기 중...</NewsListBlock>;
    }
    
    if(!articles) {
        return null;
    }
    
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;
