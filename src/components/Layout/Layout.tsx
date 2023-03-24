import React, { ReactNode } from 'react';

import styles from './Layout.module.scss';

type LayoutProps = {
        children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {

        return (<>
                <header>
                </header>
                <main className={styles['container']}>
                        {children}
                </main>
                <footer>
                </footer>
        </>
        )

}

export default Layout;