import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import Card from "./componentes/Card";

import './static/css/styles.css'

export default function App () {
    return (
        <div className="Container">
            <Navbar/>
            <Hero/>        
            <Card 
                status="SOLD OUT" 
                Photo="image 12.png"
                rating='5.0'
                reviewCount='(6)'
                country="USA"
                description="Life lessons with Katie Zaferes" 
                price="$136"
            />
            <Card
                status="ONLINE" 
                Photo="wedding-photography 1.png"
                rating='5.0'
                reviewCount='(30)'
                country="USA"
                description="Learn wedding photography" 
                price="$125"
            />      
            <Card
                status="" 
                Photo="mountain-bike 1.png"
                rating='4.8'
                reviewCount='(2)'
                country="USA"
                description="Group Mountain Biking" 
                price="$50"
            />        
        </div>
    )
}