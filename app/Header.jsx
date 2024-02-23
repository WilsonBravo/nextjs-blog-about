
export default function Header () {
    return (
        <header className="main-header">
            <nav className="nav">
                {/* src busca en la carpeta public */}
                <div className="header-title">
                    <img className="nav-img" src="./media/img/react-logo.png" alt="logo"/>
                    <h2>ReactFacts</h2>
                </div>
                
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}