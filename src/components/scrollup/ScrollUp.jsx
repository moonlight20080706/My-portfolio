// import './ScrollUp.css'
// const ScrollUp = () => {
//     window.addEventListener('scroll', function(){
//         const ScrollUp = document.querySelector('.scrollup');
//         if(this.screenY>= 560)ScrollUp.classList.add('show-scroll');
//         else ScrollUp.classList.remove('show-scroll')
//     });
//   return (
//     <a href="#" className="scrollup">
//         <i className="uil uil-arrow-up scrollup__icon"></i>
//     </a>
//   )
// }

// export default ScrollUp



import { useEffect } from "react";
import "./ScrollUp.css";

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelector(".scrollup")?.classList.toggle("show-scroll", window.scrollY >= 560);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
