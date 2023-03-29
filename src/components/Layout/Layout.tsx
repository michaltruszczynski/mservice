import React, { ReactNode } from 'react';
// import Navigation from '../Navigation/Navigation';
import Nav from '../Navigation/Nav';

import styles from './Layout.module.scss';

type LayoutProps = {
        children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {

        return (
                <>
                        <Nav />
                        <main className={styles['container']}>
                                {children}
                        </main>
                        <footer>
                        </footer>
                </>
        )

}

export default Layout;