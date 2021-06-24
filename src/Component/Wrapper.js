import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Wrapper({ children }) {
    return (
        <>
            <Header />
            <div className="mainDiv">
                {children}
            </div>
            <Footer />
        </>
    )
}
