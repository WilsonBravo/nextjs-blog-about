import React from 'react'
import App from './App'
import Json from './Json';

import data from "./data.json" with { type: "json" };

// function TiendaPagina () {
//     return (
//         <>
//             <link rel="preconnect" href="https://fonts.googleapis.com"/>
//             <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
//             <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
            
//             <App/>
//         </>
//     )
// }

function TiendaPagina () {
    const dataElements = data.map(data => {
        return <Json 
            key={data.id}
            first_name={data.first_name} 
            last_name={data.last_name} 
            email={data.email} 
            gender={data.gender} 
            ip_address={data.ip_address} 
        />
    })
    return (
        <div>
            {dataElements}
        </div>
    )
}

export default TiendaPagina