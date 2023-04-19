import React, { ReactNode, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Nav from '../Navigation/Nav';

import styles from './Layout.module.scss';

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {

    const [isNavOpen, setIsNavOpen] = useState(true)

    const openNavHandler = () => {
        setIsNavOpen(prevState => !prevState)
    }

    return (
        <>
            {/* <Navigation /> */}
            <Nav onNavControlerClick={openNavHandler} />
            <main className={styles['container']}>
                {children}
            </main>
            <footer>
            </footer>
        </>
    )

}

export default Layout;