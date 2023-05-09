import React, { ReactNode, useState } from 'react';
import classNames from 'classnames/bind';
import Navigation from '../Navigation/Navigation';
import Nav from '../Navigation/Nav';

import styles from './Layout.module.scss';

type LayoutProps = {
    children: ReactNode
}

const cx = classNames.bind(styles);

const Layout = ({ children }: LayoutProps) => {

    

    return (
        <div className={cx('container')}>
            <Nav />
            <div className={cx('container-main-content')}>
                <main className={cx('main-content')}>
                    {children}
                </main>
                <footer>
                    Testing
                </footer>
            </div>
        </div>
    )

}

export default Layout;