import React, { useState } from 'react'

export default function ContactComponent() {
    const backgroundImageUrl1 = "assets/img/breadcrumb.jpg";
    const backgroundImageUrl2 = "assets/img/contact.jpg";
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    const sendMessage = (event) =>{
        event.preventDefault();
    }



    return (
        <>
            {/* Start BreadCrumb Area */}
            <section class="breadcrumb-area pt-80 pb-80" style={{ backgroundImage: `url(${backgroundImageUrl1})`}}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h2>Contact Us</h2>
                        </div>
                        <div class="col-md-6 align-self-center">
                            <ul class="text-right">
                                <li><a href="index.html">Home</a></li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* End BreadCrumb Area */}

            {/* Start Contact Us Area */}
            <section class="section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 align-self-center">
                            <div class="contact-form">
                                <h2>Get In Touch</h2>
                                <form id="contact-form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="single-input">
                                                <input type="text" name="name" placeholder="Your Name" onChange={(e)=>setName(e.target.value)}/>
                                                    <i class="fas fa-user"></i>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="single-input">
                                                <input type="email" name="email" placeholder="Your Email" onChange={(e)=>setEmail(e.target.value)}/>
                                                    <i class="far fa-envelope"></i>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="single-input">
                                                <input type="text" name="phone" placeholder="Your Phone" onChange={(e)=>setPhonenumber(e.target.value)}/>
                                                    <i class="fas fa-mobile-alt"></i>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="single-input">
                                                <input type="text" name="subject" placeholder="Your Subjects" onChange={(e)=>setSubject(e.target.value)}/>
                                                    <i class="fas fa-file-alt"></i>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="single-input">
                                                <textarea name="message" placeholder="Write Message" onChange={(e)=>setMessage(e.target.value)}></textarea>
                                                <i class="fas fa-pen"></i>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="button-1" onClick={sendMessage}>Send Message</button>
                                        </div>
                                    </div>
                                </form>
                                <p class="ajax-response"></p>
                            </div>
                        </div>
                        <div class="col-lg-4 align-self-center">
                            <div class="contact-form-info" style={{ backgroundImage: `url(${backgroundImageUrl2})`}}>
                                <h2>Don't hesitate to contact us</h2>
                                <div class="contact-info-list">
                                    <div class="item mb-20">
                                        <div class="icon">
                                            <i class="fas fa-home"></i>
                                        </div>
                                        <div class="content">
                                            <h4>Locations</h4>
                                            <p>2512, New Market, Eliza Road, Sincher 80 CA, Canada, USA </p>
                                        </div>
                                    </div>
                                    <div class="item mb-20">
                                        <div class="icon">
                                            <i class="far fa-envelope"></i>
                                        </div>
                                        <div class="content">
                                            <h4>Drop A Mail</h4>
                                            <p>support@example.com</p>
                                            <p>example@gmail.com </p>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="icon">
                                            <i class="fas fa-mobile-alt"></i>
                                        </div>
                                        <div class="content">
                                            <h4>Call Us</h4>
                                            <p> (41) 123 521 458</p>
                                            <p>+91 235 548 7548 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Contact Us Area */}
        </>
    )
}
