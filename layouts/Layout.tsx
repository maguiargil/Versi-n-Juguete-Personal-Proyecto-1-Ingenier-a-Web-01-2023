import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import React, { JSXElementConstructor } from 'react'

interface LayoutProps{
    children:JSX.Element;
}

const Layout = ({children}:LayoutProps) => {
  return (
    <div>

        <main>
            <Header/>
            {children}
            <Footer/>
        </main>

    </div>
  )
}

export { Layout };