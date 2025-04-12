import './Qualification.css';
import { useState } from 'react';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1); // Dastlab Education ochiq bo‘lsin

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            onClick={() => toggleTab(1)}
            className={`qualification__button button-flex ${toggleState === 1 ? "qualification__active" : ""}`}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div
            onClick={() => toggleTab(2)}
            className={`qualification__button button-flex ${toggleState === 2 ? "qualification__active" : ""}`}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/* Education */}
          <div className={`qualification__content ${toggleState === 1 ? "qualification__content-active" : ""}`}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend </h3>
                <span className="qualification__subtitle">Algoritm</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024-2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Art Direction</h3>
                <span className="qualification__subtitle">Sapin Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">Sapin Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}
          </div>

          {/* Experience */}
          <div className={`qualification__content ${toggleState === 2 ? "qualification__content-active" : ""}`}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Hechqayda</h3>
                <span className="qualification__subtitle">😅</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
