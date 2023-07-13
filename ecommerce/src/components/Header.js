import React, { useState, useEffect } from 'react'

export default function Header2() {
    const [searchSlideberActiveClass, setSearchSlideberActiveClass] = useState("");
    const [miniCartSlideberActiveClass, setMiniCartSlideberActiveClass] = useState("");
    const [mobileMenuSlideberActiveClass, setMobileMenuSlideberActiveClass] = useState("");


    const handleClick = (event) => {
        event.preventDefault();
        // event.target.classList.remove("menu-item-has-children");
        if(event.currentTarget.className == "menu-open") event.currentTarget.className = "menu-item-has-children";
        else event.currentTarget.className= "menu-open";
        // const id = event.currentTarget.id;
        // console.log('hi');

        // if (id == 'page') {
        //     console.log('hello');
        //     if (document.getElementById("page").style.display == "menu-item-has-children") {
        //         document.getElementById("page").className = "menu-item-has-children menu-open";
        //     }
        //     else {
        //         document.getElementById("page").className = "menu-item-has-children";
        //     }
        // }
    };




    return (
        <>
            {/* Start Header Area */}
            <header className="header">
                {/* Header Top */}
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            {/* Top Left */}
                            <div className="col-lg-6">
                                <div className="hl_top-left">
                                    <span><i className="bi bi-envelope"></i> info12@example.com</span>
                                    <span><i className="bi bi-geo-alt"></i> California, TX 70240</span>
                                </div>
                            </div>
                            {/* Top Right */}
                            <div className="col-lg-6">
                                {/* Language */}
                                <div className="language-top">
                                    <span>English <i className="bi bi-arrow-down"></i></span>
                                    <ul>
                                        <li><a href="#">Arabic</a></li>
                                        <li><a href="#">French</a></li>
                                        <li><a href="#">Hindi</a></li>
                                        <li><a href="#">English</a></li>
                                        <li><a href="#">Chinese</a></li>
                                        <li><a href="#">Bengali</a></li>
                                    </ul>
                                </div>
                                {/* Social */}
                                <div className="top-social">
                                    <span><a href="#" title="Facebook">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a></span>
                                    <span><a href="#" title="Twitter">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a></span>
                                    <span><a href="#" title="Instagram">
                                        <i className="fa-brands fa-instagram">
                                        </i></a></span>
                                    <span><a href="#" title="Vimeo">
                                        <i className="fa-brands fa-vimeo-v"></i>
                                    </a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Header Bottom */}

                <div className="header-bottom sticky-header bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-4 align-self-center">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="assets/img/logo.png" alt="logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-8">
                                {/* Header Bottom Right */}
                                <div className="header-bright">
                                    <div className="mobile-bar">
                                        <div className="canvas_open" onClick={() => setMobileMenuSlideberActiveClass('active')}>
                                            <a>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </a>
                                        </div>
                                    </div>
                                    {/* Cart Icon */}
                                    <div className="mini-cart-icon" title="Cart" onClick={() => setMiniCartSlideberActiveClass('active')}>
                                        <a href="#">
                                            <i className="bi bi-cart3"></i>
                                            <span>2</span>
                                        </a>
                                    </div>
                                    {/* Cart Icon */}
                                    <div className="wishlist-cart-icon" title="Wishlist">
                                        <a href="wishlist.html">
                                            <i className="bi bi-suit-heart"></i>
                                            <span>2</span>
                                        </a>
                                    </div>
                                    {/* Header Search */}
                                    <div className="header-search" onClick={() => setSearchSlideberActiveClass('active')}>
                                        <div className="header-search-icon" title="Search">
                                            <i className="bi bi-search"></i>
                                        </div>
                                    </div>
                                    {/* Cart Icon */}
                                    <div className="header-user-icon">
                                        <a href="login.html" title="Login / Register">
                                            <i className="bi bi-person"></i>
                                        </a>
                                    </div>
                                </div>
                                {/* Menu */}
                                <div className="menu">
                                    <nav>
                                        <ul>
                                            <li className="menu-item">
                                                <a href="index.html">Home</a>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">Page</a>
                                                <ul>
                                                    <li><a href="about.html">About Us</a></li>
                                                    <li><a href="team.html">Team</a></li>
                                                    <li className="menu-item-has-children">
                                                        <a href="#">Shop</a>
                                                        <ul>
                                                            <li><a href="shop.html">Shop</a></li>
                                                            <li><a href="shop-grid.html">Shop Grid</a></li>
                                                            <li><a href="shop-2-column.html">Shop 2 Columns</a></li>
                                                            <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                                            <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                                            <li><a href="product-details.html">Single Products</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="#">User</a>
                                                        <ul>
                                                            <li><a href="login.html">Login</a></li>
                                                            <li><a href="register.html">Register</a></li>
                                                            <li><a href="forget-password.html">Forget Password</a></li>
                                                            <li><a href="myaccount.html">My Account</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="#">Blog</a>
                                                        <ul>
                                                            <li><a href="blog.html">Blog</a></li>
                                                            <li><a href="blog-grid.html">Blog Grid</a></li>
                                                            <li><a href="single.html">Blog Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="faq.html">Faq</a></li>
                                                    <li><a href="cart.html">Shopping Cart</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="404.html">404 Error</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">Shop</a>
                                                <ul>
                                                    <li><a href="shop.html">Shop</a></li>
                                                    <li><a href="shop-grid.html">Shop Grid</a></li>
                                                    <li><a href="shop-2-column.html">Shop 2 Columns</a></li>
                                                    <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                                    <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                                    <li><a href="product-details.html">Single Products</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">Blog</a>
                                                <ul>
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-grid.html">Blog Grid</a></li>
                                                    <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                                    <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                                    <li><a href="single.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
            {/* End Header Area */}


            {/* Start Mobile Menu Area */}
            <div className="mobile-menu-area">

                {/* offcanvas menu area start */}
                <div className={"off_canvars_overlay " + mobileMenuSlideberActiveClass}>

                </div>
                <div className="offcanvas_menu">
                    <div className={"offcanvas_menu_wrapper " + mobileMenuSlideberActiveClass}>
                        <div className="canvas_close" onClick={() => setMobileMenuSlideberActiveClass('')}>
                            <a href="javascript:void(0)"><i className="fas fa-times"></i></a>
                        </div>
                        <div className="mobile-logo">
                            <a href="index.html">
                                <img src="assets/img/logo.png" alt="logo" />
                            </a>
                        </div>
                        <div id="menu" className="text-left ">
                            <ul className="offcanvas_main_menu">
                                <li className="menu-item-has-children active">
                                    <a href="#">Home</a>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="about.html"> About Us</a>
                                </li>

                                <li className="menu-item-has-children" onClick={handleClick}>
                                    <span className='menu-expand'>
                                        <i className="bi bi-chevron-down"></i>
                                    </span>

                                    <a href="#">Page</a>
                                    <ul className="sub-menu" >
                                        <li className="menu-item-has-children">
                                            <a href="#">Team</a>
                                            <ul className="sub-menu">
                                                <li><a href="team.html">Team Styel 1</a></li>
                                                <li><a href="team-2.html">Team Styel 2</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="pricing.html">Pricing Plane</a></li>
                                        <li className="menu-item-has-children">
                                            <a href="#">Services</a>
                                            <ul className="sub-menu">
                                                <li><a href="services.html">Services</a></li>
                                                <li><a href="services-details.html">Services Details</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#">Portfolio</a>
                                            <ul className="sub-menu">
                                                <li><a href="porfolio.html">Portfolio</a></li>
                                                <li><a href="porfolio-details.html">Portfolio Details</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#">Shop</a>
                                            <ul className="sub-menu">
                                                <li><a href="cart.html">Cart</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                                <li><a href="wishlist.html">Wishlist</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#">User</a>
                                            <ul className="sub-menu">
                                                <li><a href="login.html">Login</a></li>
                                                <li><a href="register.html">Register</a></li>
                                                <li><a href="forget-password.html">Forget Password</a></li>
                                                <li><a href="account.html">My Account</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="faq.html">Faq</a></li>
                                        <li><a href="404.html">404 Error</a></li>
                                    </ul>
                                </li>

                                <li className="menu-item-has-children" onClick={handleClick}>
                                    <span className='menu-expand'>
                                        <i className="bi bi-chevron-down"></i>
                                    </span>
                                    <a href="#">Shop</a>
                                    <ul className="sub-menu">
                                        <li><a href="shop.html">Shop</a></li>
                                        <li><a href="shop-grid.html">Shop Grid</a></li>
                                        <li><a href="shop-2-column.html">Shop 2 Columns</a></li>
                                        <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                        <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                        <li><a href="product-details.html">Single Products</a></li>
                                    </ul>
                                </li>

                                <li className="menu-item-has-children" onClick={handleClick}>
                                    <span className='menu-expand'>
                                        <i className="bi bi-chevron-down"></i>
                                    </span>
                                    <a href="#">Blog</a>
                                    <ul className="sub-menu">
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="blog-grid.html">Blog Grid</a></li>
                                        <li><a href="single.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="contact.html"> Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* offcanvas menu area end */}


            {/*  Start Header Search  */}
            <div className={"f_header_search_canvas" + searchSlideberActiveClass}>
                <div className="f_header_search_canvas-full">
                    <div className="f_header">
                        <h2>Search</h2>
                        <div className="search_close" onClick={() => setSearchSlideberActiveClass('')}>
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <div className="f_header_search_form">
                        <form action="#">
                            <input type="search" name="search" placeholder="Search Here..." />
                            <button className="bi bi-search" type="submit"></button>
                        </form>
                        <div className="canvas-recent-popular-serach mt-20">
                            {/*  Single  */}
                            <div className="single mb-20">
                                <h4>Recent Searchs</h4>
                                <div className="search-tags">
                                    <a href="#">Food</a>
                                    <a href="#">grocery</a>
                                    <a href="#">Health</a>
                                    <a href="#">Orange</a>
                                    <a href="#">Junk</a>
                                    <a href="#">Shopping</a>
                                    <a href="#">Snak</a>
                                    <a href="#">Keyboard</a>
                                    <a href="#">Mouse</a>
                                    <a href="#">Smartphones</a>
                                </div>
                            </div>
                            {/*  Single  */}
                            <div className="single">
                                <h4>Popular Searchs</h4>
                                <div className="search-tags">
                                    <a href="#">Food</a>
                                    <a href="#">grocery</a>
                                    <a href="#">Health</a>
                                    <a href="#">Orange</a>
                                    <a href="#">Junk</a>
                                    <a href="#">Shopping</a>
                                </div>
                            </div>
                        </div>
                        <div className="canvas_s_popular_cate mb-30">
                            <h4>Popular Category</h4>
                            <div className="all_c">
                                <a href="shop.html">
                                    <img src="assets/img/cate/1.png" alt="img" />
                                    <span>Vegetable</span>
                                </a>
                                <a href="shop.html">
                                    <img src="assets/img/cate/2.png" alt="img" />
                                    <span>Pet Care</span>
                                </a>
                                <a href="shop.html">
                                    <img src="assets/img/cate/3.png" alt="img" />
                                    <span>Butter & Eggs</span>
                                </a>
                                <a href="shop.html">
                                    <img src="assets/img/cate/4.png" alt="img" />
                                    <span>Health</span>
                                </a>
                                <a href="shop.html">
                                    <img src="assets/img/cate/5.png" alt="img" />
                                    <span>Milk & Cream</span>
                                </a>
                                <a href="shop.html">
                                    <img src="assets/img/cate/6.png" alt="img" />
                                    <span>Rice</span>
                                </a>
                                <a href="shop.html">
                                    <img src="assets/img/cate/7.png" alt="img" />
                                    <span>Food</span>
                                </a>
                                <a href="shop.html">
                                    <img src="assets/img/cate/8.png" alt="img" />
                                    <span>Food</span>
                                </a>
                                <a href="shop.html">
                                    <strong>View All <i className="bi bi-arrow-right-short"></i></strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="off_canvars_overlay"></div>
            {/*  End Header Search  */}


            {/*  Start MiniCart Area  */}
            <div className={"mini-cart-area" + miniCartSlideberActiveClass}>
                <div className="mini-cart-full">
                    {/*  Header  */}
                    <div className="mini-cart-header">
                        <h2>Shopping cart</h2>
                        <div className="mini-cart-close" onClick={() => setMiniCartSlideberActiveClass('')}>
                            <i className="bi bi-x"></i>
                        </div>
                    </div>
                    {/*  Cart Content  */}
                    <div className="mini-cart-full">
                        <div className="cartmini__inner">
                            <ul>
                                {/*  Single  */}
                                <li>
                                    <div className="thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/img/product/1.png" alt="img" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <h4><a href="product-details.html">Purnava Omega 3 Enri ched Egg</a></h4>
                                        <div className="m-price">
                                            <span>$39 x 2</span>
                                        </div>
                                        <div className="remove">
                                            <a href="javascript:void(0);"><i className="bi bi-x"></i></a>
                                        </div>
                                    </div>
                                </li>
                                {/*  Single  */}
                                <li>
                                    <div className="thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/img/product/2.png" alt="img" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <h4><a href="product-details.html">Purnava Omega 3 Enri ched Egg</a></h4>
                                        <div className="m-price">
                                            <span>$39 x 2</span>
                                        </div>
                                        <div className="remove">
                                            <a href="javascript:void(0);"><i className="bi bi-x"></i></a>
                                        </div>
                                    </div>
                                </li>
                                {/*  Single  */}
                                <li>
                                    <div className="thumbnail">
                                        <a href="product-details.html">
                                            <img src="assets/img/product/3.png" alt="img" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <h4><a href="product-details.html">Purnava Omega 3 Enri ched Egg</a></h4>
                                        <div className="m-price">
                                            <span>$39 x 2</span>
                                        </div>
                                        <div className="remove">
                                            <a href="javascript:void(0);"><i className="bi bi-x"></i></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*  MiniCart Bottom  */}
                    <div className="mini-cart-bottom">
                        <h4>SubTotal : <span>$203.00</span></h4>
                        <a className="button-2" href="cart.html">View Cart</a>
                        <a className="button-1" href="checkout.html">Checkout Now</a>
                    </div>
                </div>
            </div>
            {/*  End MiniCart Area  */}
        </>
    )
}
