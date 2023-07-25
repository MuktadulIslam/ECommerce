import React from 'react'

export default function Footer() {
    return (
        <>
            {/* Start Subscribe Area */}
            <section className="subscribe-form pt-70 pb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="subscribe-left mb-50">
                                <div className="img">
                                    <img src="assets/img/subscribe.png" alt="img" />
                                </div>
                                <div className="content">
                                    <h2>Newsletter</h2>
                                    <p>Subsribe here for get every single updates</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="email" name="sub" placeholder="Enter Your Email Address" />
                                    <button type="submit">subscribe now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Subscribe Area */}

            {/* Start Footer Area */}
            <footer className="footer">
                {/* Footer Top */}
                <div className="footer-top pt-70 pb-20">
                    <div className="container">
                        <div className="row">
                            {/* Single */}
                            <div className="col-lg-6 col-xl-4 col-md-6 mb-30">
                                <div className="footer-widgets-single">
                                    <h3>Our Address</h3>
                                    <ul className="corporate-address">
                                        <li>
                                            <i className="fas fa-map-marker-alt"></i>
                                            <span>PO Box 16122 Collins Street West Victoria 8007 Australia</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-phone-alt"></i>
                                            <span>+08801601-678059</span>
                                        </li>
                                        <li>
                                            <i className="far fa-envelope"></i>
                                            <span>bsse1215@iit.du.ac.bd</span>
                                        </li>
                                    </ul>
                                    <div className="footer-social">
                                        <span><a href="#"><i className="fab fa-facebook-f"></i></a></span>
                                        <span><a href="#"><i className="fab fa-twitter"></i></a></span>
                                        <span><a href="#"><i className="fab fa-instagram"></i></a></span>
                                        <span><a href="#"><i className="fab fa-linkedin"></i></a></span>
                                    </div>
                                </div>
                            </div>
                            {/* Single */}
                            <div className="col-lg-3 col-xl-2 col-md-6 mb-30">
                                <div className="footer-widgets-single">
                                    <h3>Information </h3>
                                    <ul className="footer-menu">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Frequently Questions</a></li>
                                        <li><a href="#">Customer Service</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Single */}
                            <div className="col-lg-3 col-xl-2 col-md-6 mb-30">
                                <div className="footer-widgets-single">
                                    <h3>My Account </h3>
                                    <ul className="footer-menu">
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">Login Page</a></li>
                                        <li><a href="#">Shopping cart</a></li>
                                        <li><a href="#">Register Account</a></li>
                                        <li><a href="#">Logut</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Single */}
                            <div className="col-lg-3 col-xl-2 col-md-6 mb-30">
                                <div className="footer-widgets-single">
                                    <h3>Need Help? </h3>
                                    <ul className="footer-menu">
                                        <li><a href="#">Help Center</a></li>
                                        <li><a href="#">Fodo Market Terms</a></li>
                                        <li><a href="#">Author Terms</a></li>
                                        <li><a href="#">Fodo Licenses</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Single */}
                            <div className="col-lg-3 col-xl-2 col-md-6 mb-30">
                                <div className="footer-widgets-single">
                                    <h3>Categories</h3>
                                    <ul className="footer-menu">
                                        <li><a href="#">Fruits & Vegetables</a></li>
                                        <li><a href="#"> Dairy Products</a></li>
                                        <li><a href="#">Package Foods</a></li>
                                        <li><a href="#">Beverage</a></li>
                                        <li><a href="#">Health & Wellness</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Middle */}
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="cate-fo">
                                    <span><strong>Food & Vegetable:</strong></span>
                                    <span><a href="#">Carrots</a></span>
                                    <span><a href="#">Broccoli.</a></span>
                                    <span><a href="#">Potato</a></span>
                                    <span><a href="#">Cauliflower</a></span>
                                    <span><a href="#">Eggplant</a></span>
                                    <span><a href="#">Potato</a></span>
                                    <span><a href="#">Chives</a></span>
                                    <span><a href="#">Cauliflower</a></span>
                                    <span><a href="#">View all</a></span>
                                </div>
                                <div className="cate-fo">
                                    <span><strong>Health & Beauty:</strong></span>
                                    <span><a href="#">Skin Care</a></span>
                                    <span><a href="#">Body Shower</a></span>
                                    <span><a href="#">Makeup</a></span>
                                    <span><a href="#">Hair Care</a></span>
                                    <span><a href="#">Lipstick</a></span>
                                    <span><a href="#">Perfume</a></span>
                                    <span><a href="#">View all</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom pt-30 pb-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mb-20">
                                <div className="payment-img">
                                    <img src="assets/img/payment.png" alt="payment" />
                                </div>
                            </div>
                            <div className="col-md-6 mb-20">
                                <div className="f_caopy_text text-right">
                                    <p>Copyright © VirtualBox owned by <a href="https://www.facebook.com/muktadul.islam.1690?mibextid=ZbWKwL"><b>Muktadul Islam</b></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* End Footer Area */}

        </>
    )
}
