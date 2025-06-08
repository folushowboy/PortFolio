import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react'
import style from './Header.module.css'
import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import whatsapp from '../../assets/icons/whatsapp.svg'
import twitter from '../../assets/icons/twitter.svg'


// ...existing code...
const Header = ()=> {
    const [hiddenMenu, setHiddenMenu] = useState(true);

    return(
        <>
        <header className={style.Header}>
            <h2>Odusina Tolulope</h2>
            
            <nav>
                <span 
                    className={style.menuIcon}
                    onClick={() => setHiddenMenu(!hiddenMenu)}
                >
                    {hiddenMenu ? <FaBars /> : <FaTimes />}
                </span>
                <ul className={hiddenMenu ? style.hideMenu : style.showMenu}>
                    <li>
                        <a href="https://github.com/folushowboy" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/odusina-tolulope/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/+2349077867875" target="_blank" rel="noopener noreferrer">
                            <img src={whatsapp} alt="WhatsApp" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="Twitter" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}
export default Header