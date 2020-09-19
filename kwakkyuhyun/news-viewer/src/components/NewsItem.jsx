import React from 'react';
import styles from '../scss/components/NewsItem.scss';

const NewsItem = ({ article }) => {
    const { title, description, url, urlToImage } = article;
    return (
        <div className={styles.wrap}>
            {urlToImage && (
                <div className={styles.thumbnail}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} className={styles.image} alt="thumbnail" />
                    </a>
                </div>
            )}
            <div>
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p className={styles.desc}>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default NewsItem;
