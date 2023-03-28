import React, { ReactNode } from 'react';
import Navigation from '../Navigation/Navigation';

import styles from './Layout.module.scss';

type LayoutProps = {
        children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {

        return (
                <>
                        <Navigation />
                        <main className={styles['container']}>
                                {children}
                        </main>
                        <footer>
                        </footer>
                </>
        )

}

export default Layout;