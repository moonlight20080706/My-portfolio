import { useState } from 'react'
import './Header.css'
import { Link } from 'react-scroll'


const links = [
    {text: 'Home', to:'home'},
    {text: 'About', to:'about'},
    {text: 'Skills', to:'skills'},
    {text: 'Qualification', to:'qualification'},
    {text: 'Portfolio', to:'portfolio'},
    {text: 'Contact', to:'contact'},
]


const Header = () => {
    /* =======Togle Menu ====== */
    const [Toggle, showMenu] = useState(false)
  return (
    <header className="header">
        <nav className="nav container">
            <a href="/" className='nav__logo'>Smith</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className='nav__list grid'>
                    {links.map(link =>{
                        return( 
                        <li key={link.to} className='nav__item'>
                            <Link 
                            to={link.to}
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={300}
                            className='nav__link'
                            style={{cursor:'pointer'}}
                            >
                                {link.text}
                            </Link>
                        </li>
                        )
                    })}
                </ul>

                <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>

            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header