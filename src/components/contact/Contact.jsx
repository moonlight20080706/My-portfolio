// import './Contact.css';
// import { useRef } from 'react';
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//     const form = useRef();

//     const sendEmail = (e) =>{
//         e.preventDefault()

//         emailjs
//         .sendForm(
//           'service_3oiy5dm',
//            'template_g4syu9p',
//             from.current, 
//             'Uhujfv9tdWgfynjVf'
//           )
//           .then((result) =>{
//             console.log(result.text),
//             (error) =>{
//                 console.log(error.text);
//             }
//         })
//     }
//   return (
//     <section className="contact section" id="contact">
//       <h2 className="section__title">Get in touch</h2>
//       <span className="section__subtitle">Contact Me</span>

//       <div className="contact__container container grid">
//         <div className="contact__content">
//           <h3 className="contact__title">Talk to me</h3>

//           <div className="contact__info">
//             <div className="contact__card">
//               <i className="bx bx-mail-send contact__card-icon"></i>
//               <h3 className="contact__card-title">Email</h3>
//               <span className="contact__card-data">moonlight.2008.07.06@gmail.com</span>
//               <a href="mailto:moonlight.2008.07.06@gmail.com" className="contact__button">
//                 Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
//               </a>
//             </div>

//             <div className="contact__card">
//               <i className="bx bxl-phone contact__card-icon"></i>
//               <h3 className="contact__card-title">My Number</h3>
//               <span className="contact__card-data">+998 94 378 77 22</span>
//               <a href="tel:+998943787722" className="contact__button">
//                 Call me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
//               </a>
//             </div>

//             <div className="contact__card">
//               <i className="bx bxl-telegram contact__card-icon"></i>
//               <h3 className="contact__card-title">Telegram</h3>
//               <span className="contact__card-data">@IsmoilovaMoon</span>
//               <a href="https://t.me/IsmailovaMoon" className="contact__button">
//                 Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="contact__content">
//           <h3 className="contact__title">Write me your project</h3>

//           <form ref={form} onSubmit={sendEmail} className="contact__form">
//             <div className="contact__form-div">
//               <label className="contact__form-tag">Name</label>
//               <input type="text" className="contact__form-input" placeholder="Insert your name" />
//             </div>

//             <div className="contact__form-div">
//               <label className="contact__form-tag">Email</label>
//               <input type="email" className="contact__form-input" placeholder="Insert your email" />
//             </div>

//             <div className="contact__form-div contact__form-area">
//               <label className="contact__form-tag">Project</label>
//               <textarea className="contact__form-input" placeholder="Write me your project"></textarea>
//             </div>

//             <button className="button button-flex">Send message</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


































import './Contact.css';
import { useRef } from 'react';
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
          'service_3oiy5dm',
          'template_g4syu9p',
          form.current,  // 🔹 Xatolik tuzatildi
          'Uhujfv9tdWgfynjVf'
        )
        e.target.reset()
        // .then((result) => {
        //     console.log("Email sent successfully:", result.text);
        // })
        // .catch((error) => {  // 🔹 Xatolikni to'g'ri ushlash
        //     console.log("Email sending failed:", error.text);
        // });
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">moonlight.2008.07.06@gmail.com</span>
                            <a href="mailto:moonlight.2008.07.06@gmail.com" className="contact__button">
                                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-phone contact__card-icon"></i>
                            <h3 className="contact__card-title">My Number</h3>
                            <span className="contact__card-data">+998 94 378 77 22</span>
                            <a href="tel:+998943787722" className="contact__button">
                                Call me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-telegram contact__card-icon"></i>
                            <h3 className="contact__card-title">Telegram</h3>
                            <span className="contact__card-data">@IsmoilovaMoon</span>
                            <a href="https://t.me/IsmailovaMoon" className="contact__button">
                                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="user_name" className="contact__form-input" placeholder="Insert your name" />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name="user_email" className="contact__form-input" placeholder="Insert your email" />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea name="message" className="contact__form-input" placeholder="Write me your project"></textarea>
                        </div>

                        <button className="button button-flex">Send message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
