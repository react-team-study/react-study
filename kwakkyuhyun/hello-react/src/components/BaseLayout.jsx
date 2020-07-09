import React from 'react';
import classnames from 'classnames';
import styles from './BaseLayout.module.scss';

const BaseLayout = (props) => {
    const { title, className, children } = props;
    return (
        <section className={classnames(styles.section, className && className)}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </section>
    );
};

export default BaseLayout;
