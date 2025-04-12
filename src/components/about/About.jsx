import './About.css'
import AboutImg from '../../assets/men.jpg'
import MyCv from '../../assets/CV-Mokhinur.pdf'
import Info from './Info'
const About = () => {
  return (
    <div className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
            <img src={AboutImg} alt="" className='about__img'/>
            <div className="about__data">
                <Info/>
                <p class="about__description">  
                I am a Junior Frontend Developer with knowledge of JavaScript and React.  
                I enjoy web development and constantly strive to improve my skills.  
                I aim to create beautiful and user-friendly interfaces.  
                </p>
                <a  href={MyCv} className="button">Dowland SV</a>


            </div>
        </div>
    </div>
  )
}

export default About