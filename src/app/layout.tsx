import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins( {
    weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ],
    subsets: [ 'latin' ]
} )

export const metadata: Metadata = {
    title: 'Max Alva - Web Developer',
    description: 'Desarrollador web especializado en Angular, Reactjs, Nextjs',
}

export default function RootLayout( {
                                        children,
                                    }: {
    children: React.ReactNode
} ) {
    return (
        <html lang="es">
        <body className={ poppins.className }>{ children }</body>
        </html>
    )
}
