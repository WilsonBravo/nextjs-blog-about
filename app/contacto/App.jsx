import Navbar from "./componentes/Navbar"
import Main from "./componentes/Main"

// import styles
import './static/css/styles.css'

export default function App () {
    return (
        <div className="container">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>

            <Navbar/>
            <Main/>
        </div>        
    )
}