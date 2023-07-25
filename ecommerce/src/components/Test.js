import React from 'react'
import Carousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Test() {
    return (
        <>
            <div class="pt-20 pb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <Carousel autoPlay={true}
                                // showStatus={false}
                                // showArrows={true}
                                // showIndicators={false}
                                // swipeable={true}
                                // emulateTouch={true}
                                // showThumbs={false}
                                // dynamicHeight={false}
                                // centerMode={true}
                                // centerSlidePercentage={33.33} // Adjust this value to control the number of items shown
                                // width="100%"
                                className='owl-theme' loop items={2} autoplay={true} autoplayTimeout={4000}
                                >

                                <div class="feature-product-slider">
                                    {/* Single */}
                                    <div class="product-item">
                                        <div class="sale-badge"><span>Sale</span></div>
                                        {/* Thumbnail */}
                                        <div class="product-thumbnail">
                                            <div class="img">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/1.png" alt="product" />
                                                </a>
                                            </div>
                                            <a class="wishlist" href="wishlist.html"><i class="far fa-heart"></i></a>
                                            <div class="product-overly-btn">
                                                <a data-bs-toggle="modal" data-bs-target="#QuickViewModal" href="#"><i
                                                    class="far fa-eye"></i></a>
                                            </div>
                                            <a class="add-to-cart" href="#">Add to Cart</a>
                                        </div>
                                        <div class="product-content">
                                            <div class="ratting">
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                            </div>
                                            <h4><a href="product-details.html">Purnava Omega 3 Enri...</a></h4>
                                            <div class="pricing">
                                                <span>$200 <del>$210</del></span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single */}
                                    <div class="product-item">
                                        <div class="discount-badge"><span>-33%</span></div>
                                        {/* Thumbnail */}
                                        <div class="product-thumbnail">
                                            <div class="img">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/3.png" alt="product" />
                                                </a>
                                            </div>
                                            <a class="wishlist" href="wishlist.html"><i class="far fa-heart"></i></a>
                                            <div class="product-overly-btn">
                                                <a data-bs-toggle="modal" data-bs-target="#QuickViewModal" href="#"><i
                                                    class="far fa-eye"></i></a>
                                            </div>
                                            <a class="add-to-cart" href="#">Add to Cart</a>
                                        </div>
                                        <div class="product-content">
                                            <div class="ratting">
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                            </div>
                                            <h4><a href="product-details.html">Purnava Omega 3 Enri...</a></h4>
                                            <div class="pricing">
                                                <span>$200 <del>$210</del></span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single */}
                                    <div class="product-item">
                                        <div class="discount-badge"><span>-33%</span></div>
                                        {/* Thumbnail */}
                                        <div class="product-thumbnail">
                                            <div class="img">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/2.png" alt="product" />
                                                </a>
                                            </div>
                                            <a class="wishlist" href="wishlist.html"><i class="far fa-heart"></i></a>
                                            <div class="product-overly-btn">
                                                <a data-bs-toggle="modal" data-bs-target="#QuickViewModal" href="#"><i
                                                    class="far fa-eye"></i></a>
                                            </div>
                                            <a class="add-to-cart" href="#">Add to Cart</a>
                                        </div>
                                        <div class="product-content">
                                            <div class="ratting">
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                            </div>
                                            <h4><a href="product-details.html">Purnava Omega 3 Enri...</a></h4>
                                            <div class="pricing">
                                                <span>$200 <del>$210</del></span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single */}
                                    <div class="product-item">
                                        <div class="sale-badge"><span>New</span></div>
                                        {/* Thumbnail */}
                                        <div class="product-thumbnail">
                                            <div class="img">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/7.png" alt="product" />
                                                </a>
                                            </div>
                                            <a class="wishlist" href="wishlist.html"><i class="far fa-heart"></i></a>
                                            <div class="product-overly-btn">
                                                <a data-bs-toggle="modal" data-bs-target="#QuickViewModal" href="#"><i
                                                    class="far fa-eye"></i></a>
                                            </div>
                                            <a class="add-to-cart" href="#">Add to Cart</a>
                                        </div>
                                        <div class="product-content">
                                            <div class="ratting">
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                            </div>
                                            <h4><a href="product-details.html">Purnava Omega 3 Enri...</a></h4>
                                            <div class="pricing">
                                                <span>$200 <del>$210</del></span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single */}
                                    <div class="product-item">
                                        {/* Thumbnail */}
                                        <div class="product-thumbnail">
                                            <div class="img">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/4.png" alt="product" />
                                                </a>
                                            </div>
                                            <a class="wishlist" href="wishlist.html"><i class="far fa-heart"></i></a>
                                            <div class="product-overly-btn">
                                                <a data-bs-toggle="modal" data-bs-target="#QuickViewModal" href="#"><i
                                                    class="far fa-eye"></i></a>
                                            </div>
                                            <a class="add-to-cart" href="#">Add to Cart</a>
                                        </div>
                                        <div class="product-content">
                                            <div class="ratting">
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                            </div>
                                            <h4><a href="product-details.html">Purnava Omega 3 Enri...</a></h4>
                                            <div class="pricing">
                                                <span>$200 <del>$210</del></span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single */}
                                    <div class="product-item">
                                        <div class="sale-badge"><span>Sale</span></div>
                                        {/* Thumbnail */}
                                        <div class="product-thumbnail">
                                            <div class="img">
                                                <a href="product-details.html">
                                                    <img src="assets/img/product/5.png" alt="product" />
                                                </a>
                                            </div>
                                            <a class="wishlist" href="wishlist.html"><i class="far fa-heart"></i></a>
                                            <div class="product-overly-btn">
                                                <a data-bs-toggle="modal" data-bs-target="#QuickViewModal" href="#"><i
                                                    class="far fa-eye"></i></a>
                                            </div>
                                            <a class="add-to-cart" href="#">Add to Cart</a>
                                        </div>
                                        <div class="product-content">
                                            <div class="ratting">
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                                <span><i class="fas fa-star"></i></span>
                                            </div>
                                            <h4><a href="product-details.html">Purnava Omega 3 Enri...</a></h4>
                                            <div class="pricing">
                                                <span>$200 <del>$210</del></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
