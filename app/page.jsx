import React from 'react'
import ReactDOM from 'react-dom'
// Estilos
import './static/css/reset.css';
// Estilos
import './static/css/styles.css';

// Componentes
import Header from './Header'
import MainSection from './MainSection'
import Footer from './Footer'

function Page () {
    return (
        <div>
            <Header/>
            <MainSection/>
            <Footer/>
        </div>
    )
}

export default Page