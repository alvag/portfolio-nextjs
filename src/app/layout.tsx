import './reset.scss';
import './globals.scss';
import './variables.scss';
import './layout.scss';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Sidebar } from '@/components';
import { Menu } from '@/components/Menu/Menu';

const poppins = Poppins( {
    weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ],
    subsets: [ 'latin' ]
} )

export const metadata: Metadata = {
    title: 'Max Alva - Desarrollador Frontend',
    description: 'Desarrollador especializado en Angular, Reactjs, Nextjs',
}

export default function RootLayout( {
                                        children,
                                    }: {
    children: React.ReactNode
} ) {
    return (
        <html lang="es">
        <body className={ poppins.className }>
        <div className="layout">
            <div className="layout__aside">
                <Sidebar/>
            </div>
            <div className="layout__responsive-menu">
                <Menu/>
            </div>
            <main className="layout__content">
                { children }
            </main>
        </div>

        </body>
        </html>
    )
}
