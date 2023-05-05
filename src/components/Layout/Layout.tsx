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

    const [isNavOpen, setIsNavOpen] = useState<boolean>(true)

    return (
        <div>
            <Nav setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
            <main className={cx('container', 'home', { 'home--close': !isNavOpen })}>
                {children}

            </main>

            <footer>
            </footer>
        </div>
    )

}

export default Layout;