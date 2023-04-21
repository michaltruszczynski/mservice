import React, { ReactNode, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Nav from '../Navigation/Nav';

import styles from './Layout.module.scss';

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {

    const [isNavOpen, setIsNavOpen] = useState<boolean>(true)

    return (
        <>
            {/* <Navigation /> */}
            <Nav setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
            <main className={styles['container']}>
                {children}
            </main>
            <footer>
            </footer>
        </>
    )

}

export default Layout;