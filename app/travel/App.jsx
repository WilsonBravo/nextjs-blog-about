// components
import Header from "./components/Header"
import Section from "./components/Section"
// data
import data from "./data"

export default function App () {
    const travelData = data.map(item=>{
        return <Section key={item.id} travelData={item}  />
    })
    return (
        <>
            <Header/>
            <section className="section">
                {travelData}
            </section>
        </>
    )
}