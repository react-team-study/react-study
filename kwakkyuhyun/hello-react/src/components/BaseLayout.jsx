import React from 'react';
import classnames from 'classnames';
import styles from './BaseLayout.module.scss';

const BaseLayout = (props) => {
    const { title, type_noneBorder = false, children } = props;
    return (
        <section className={classnames(styles.section, type_noneBorder && styles.none_border)}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </section>
    );
};

export default BaseLayout;
