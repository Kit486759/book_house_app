import React, { useContext } from 'react'
import Header from './Header';
import Footer from './Footer';
import { ContextProvider } from './ContextApi';
import { Spinner, Container } from 'react-bootstrap';

export default function Wrapper({ children }) {
    const { state } = useContext(ContextProvider)
    return (
        <>
            <Header />
            {!state ?
                <div style={{position: "absolute",top:"50%", left:"50%" , transform: 'translate(-50%,-50%)',
                    }}>
                    <Spinner animation="border" variant="primary" />
                    <Spinner animation="border" variant="secondary" />
                    <Spinner animation="border" variant="success" />
                    <Spinner animation="border" variant="danger" />
                    <Spinner animation="border" variant="warning" />
                    <Spinner animation="border" variant="info" />
                    <Spinner animation="border" variant="dark" />
                </div>
                :
                <>
                    <div className="mainDiv"
                    style={{minHeight:'calc(100vh - 300px)', boxSizing:'border-box'
                    }}>
                        {children}
                    </div>
                    <Footer />
                </>
            }

        </>
    )
}
// display:'flex',justifyContent:'center',alignContent:'center',