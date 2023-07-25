import React from 'react'
import TeamMemberComponent from './TeamMemberComponent';

export default function AboutComponent() {

    const backgroundImageUrl1 = "assets/img/breadcrumb.jpg";
    const backgroundImageUrl2 = "assets/img/ab-bg.jpg";
    return (
        <>
            {/* Start BreadCrumb Area */}
            <section class="breadcrumb-area pt-80 pb-80" style={{ backgroundImage: `url(${backgroundImageUrl1})` }}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h2>About Us</h2>
                        </div>
                        <div class="col-md-6 align-self-center">
                            <ul class="text-right">
                                <li><a href="index.html">Home</a></li>
                                <li>About Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* End BreadCrumb Area */}

            {/* Start About Us Area */}
            <section class="section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="about-img">
                                <img src="assets/img/about.jpg" alt="about"/>
                            </div>
                        </div>
                        <div class="col-lg-6 align-self-center">
                            <div class="about-content">
                                <h4>About Us</h4>
                                <h2>Serving Organic Crop Since 1922</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus urna arcu, eu bibendum ante eleifend eu. Aliquam vitae nisi fringilla, gravida enim id, pharetra magna. Donec eu eleifend ex. Mauris et lectus velit. Sed tincidunt mauris in massa accumsan vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                <ul>
                                    <li><i class="fas fa-check-circle"></i> With Love &amp; Dedication</li>
                                    <li><i class="fas fa-check-circle"></i> The Best Trusted</li>
                                    <li><i class="fas fa-check-circle"></i> Farms In the World</li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus urna arcu, eu bibendum ante eleifend eu. Aliquam vitae nisi fringilla, gravida enim id, pharetra magna. Donec eu eleifend ex.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End About Us Area */}


            {/* Start We Provide Area  */}
            <section class="we-provied" style={{ backgroundImage: `url(${backgroundImageUrl2})` }}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2 text-center">
                            <div class="we-provied-contetn">
                                <div class="video-btn">
                                    <a data-rel="lightcase" href="https://player.vimeo.com/video/553110309?h=dc4ee31dc4"><i class="fas fa-play"></i></a>
                                </div>
                                <h2>We Are A Gsore Focused On Delivering Best Organic Food And User Experiences.</h2>
                                <p>Nullam ipsum libero, vulputate non tristique ac, ultrices quis ipsum. Sed imperdiet diam sollicitudin, molestie nisi in, commodo massa. </p>
                                <a class="button-1" href="shop.html">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End We Provide Area */}


            {/* Start Info Box Area */}
            <section class="section-padding-2">
                <div class="container">
                    <div class="row">
                        {/* Single */}
                        <div class="col-lg-3 col-sm-6 mb-30">
                            <div class="info_box_1">
                                <div class="icon">
                                    <i class="fas fa-headset"></i>
                                </div>
                                <div class="content">
                                    <h4>24X7 Support</h4>
                                    <p>Contact us 24 hours a day, 7 days a week</p>
                                </div>
                            </div>
                        </div>
                        {/* Single */}
                        <div class="col-lg-3 col-sm-6 mb-30">
                            <div class="info_box_1">
                                <div class="icon">
                                    <i class="fas fa-plane"></i>
                                </div>
                                <div class="content">
                                    <h4>Free Shipping</h4>
                                    <p>Free shipping on all US order or order above $200</p>
                                </div>
                            </div>
                        </div>
                        {/* Single */}
                        <div class="col-lg-3 col-sm-6 mb-30">
                            <div class="info_box_1">
                                <div class="icon">
                                    <i class="fas fa-undo-alt"></i>
                                </div>
                                <div class="content">
                                    <h4>30 Days Return</h4>
                                    <p>Simply return it within 30 days for an exchange</p>
                                </div>
                            </div>
                        </div>
                        {/* Single */}
                        <div class="col-lg-3 col-sm-6 mb-30">
                            <div class="info_box_1">
                                <div class="icon">
                                    <i class="fas fa-dollar-sign"></i>
                                </div>
                                <div class="content">
                                    <h4>Payment Secure</h4>
                                    <p>Contact us 24 hours a day, 7 days a week</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Info Box Area */}
            
            
            {/* Start Team Area */}
            <TeamMemberComponent/>
            {/* End Team Area */}


            {/* Start Call Action */}
            <div class="call_action_a pt-30">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 mb-30 align-self-center">
                            <h2>Get A Free Service Or Make A Call</h2>
                        </div>
                        <div class="col-md-6 mb-30 text-right">
                            <a class="button-1 bg-white" href="contact.html"><i class="fas fa-phone-volume"></i> MAKE A CALL</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Call Action */}
        </>
    )
}
