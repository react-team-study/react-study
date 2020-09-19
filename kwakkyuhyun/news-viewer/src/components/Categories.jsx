import React from 'react';
import styles from '../scss/components/Categories.scss';
import { NavLink } from 'react-router-dom';

const categories = [
    {
        name: 'all',
        text: '전체보기',
    },
    {
        name: 'business',
        text: '비즈니스',
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트',
    },
    {
        name: 'health',
        text: '건강',
    },
    {
        name: 'science',
        text: '과학',
    },
    {
        name: 'sports',
        text: '스포츠',
    },
    {
        name: 'technology',
        text: '기술',
    },
];

const Categories = () => {
    return (
        <>
            <h1 className="blind">뉴스</h1>
            <ul className={styles.list}>
                {categories.map(c => (
                    <li
                        className={styles.item}
                        key={c.name}
                    >
                        <NavLink
                            className={styles.button}
                            activeClassName={styles.active}
                            exact={c.name === 'all'}
                            to={c.name === 'all' ? '/' : `/${c.name}`}
                        >
                            {c.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Categories;
