import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Smith</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://t.me/IsmailovaMoon" className="footer__social-link" target='_blank'>
            <i class='uil uil-telegram'></i>
        </a>
        <a href="https://www.youtube.com/" className="footer__social-link" target='_blank'>
            <i class='uil uil-youtube'></i>
        </a>
        <a href="https://github.com/moonlight20080706" className="footer__social-link" target='_blank'>
            <i class='uil uil-github-alt'></i>
        </a>
            </div>

            {/* <span className="footer__copy">
                &#169;Crypticalcoder. All rights reserved
            </span> */}
        </div>
    </footer>
  )
}

export default Footer