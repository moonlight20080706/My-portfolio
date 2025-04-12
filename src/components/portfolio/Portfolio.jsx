import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Portfolio.css'

// import images
import Herro from '../../assets/Hero section.png'
import Efood from '../../assets/Header (2).png'
import Happy from '../../assets/Hero (1).png'

const Portfolio = () => {
  return (
    <section className="section portfolio" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <div className="cards-wrapper"></div>
      <div className="portfolio-cards">
        <div className="card">
          <div className='p-img'>
            <img src={Herro} alt="" /></div>
          <h2>Deseign website</h2>
          <p></p>
          <span>
             <i class="fa-brands fa-html5"></i>  
             <i class="fa-brands fa-css3-alt"></i>
          </span>
          <a className='section__title'  href="https://house01.vercel.app/" target='_blank'>Wiev project</a>
        </div>

        <div className="card">
          <div className='p-img'>
            <img src={Efood} alt="" /></div>
          <h2>Deseign website</h2>
          <p></p>
          <span>
             <i class="fa-brands fa-html5"></i>  
             <i class="fa-brands fa-css3-alt"></i>
             <i class="fa-brands fa-react"></i>  
          </span>
          <a className='section__title'  href="https://e-food-livid.vercel.app/" target='_blank'>Wiev project</a>
        </div>

        <div className="card">
          <div className='p-img'>
            <img src={Happy} alt="" /></div>
          <h2>Deseign website</h2>
          <p></p>
          <span>
             <i class="fa-brands fa-html5"></i>  
             <i class="fa-brands fa-css3-alt"></i>
             <i class="fa-brands fa-react"></i>  
             <i class="fa-solid fa-people-group"></i>

          </span>
          <a className='section__title' href="https://house01.vercel.app/" target='_blank'>Wiev project</a>
        </div>

      </div>
    </section>
  )
}

export default Portfolio


