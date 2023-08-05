import React from 'react'

export default function ProductDetails() {
    const backgroundImageUrl = "assets/img/breadcrumb.jpg";


    return (
        <>
            {/* Start BreadCrumb Area */}
            <section className="breadcrumb-area pt-80 pb-80" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h2>Shop Details</h2>
                        </div>
                        <div class="col-md-6 align-self-center">
                            <ul class="text-right">
                                <li><a href="index.html">Home</a></li>
                                <li>Shop Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* End BreadCrumb Area */}

            {/* Start Shop Section */}
            <section class="section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row product_details_top">
                                <div class="col-lg-6">
                                    <div class="quick_view_thumb mb-30">
                                        <a data-rel="lightcase:quickView" href="assets/img/pd.png">
                                            <img src="assets/img/pd.png" alt="img" />
                                        </a>
                                    </div>
                                    <div class="quick_view_gallery owl-carousel">
                                        {/* Single */}
                                        <div class="item">
                                            <a data-rel="lightcase:quickView" href="assets/img/product/1.png">
                                                <img src="assets/img/product/1.png" alt="img" />
                                            </a>
                                        </div>
                                        {/* Single */}
                                        <div class="item">
                                            <a data-rel="lightcase:quickView" href="assets/img/product/2.png">
                                                <img src="assets/img/product/2.png" alt="img" />
                                            </a>
                                        </div>
                                        {/* Single */}
                                        <div class="item">
                                            <a data-rel="lightcase:quickView" href="assets/img/product/3.png">
                                                <img src="assets/img/product/3.png" alt="img" />
                                            </a>
                                        </div>
                                        {/* Single */}
                                        <div class="item">
                                            <a data-rel="lightcase:quickView" href="assets/img/product/4.png">
                                                <img src="assets/img/product/4.png" alt="img" />
                                            </a>
                                        </div>
                                        {/* Single */}
                                        <div class="item">
                                            <a data-rel="lightcase:quickView" href="assets/img/product/5.png">
                                                <img src="assets/img/product/5.png" alt="img" />
                                            </a>
                                        </div>
                                        {/* Single */}
                                        <div class="item">
                                            <a data-rel="lightcase:quickView" href="assets/img/product/6.png">
                                                <img src="assets/img/product/6.png" alt="img" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="p_details_content">
                                        {/* Ratting */}
                                        <div class="ratting">
                                            <span><i class="fas fa-star"></i></span>
                                            <span><i class="fas fa-star"></i></span>
                                            <span><i class="fas fa-star"></i></span>
                                            <span><i class="fas fa-star"></i></span>
                                            <span><i class="fas fa-star"></i></span>
                                            <span><small>( 25 Reviews )</small></span>
                                        </div>
                                        <h3><a href="product-details.html">Vegetables Juices</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac dui sed nunc sagittis maximus. Sed lobortis commodo dapibus. Nunc placerat, massa nec blandit egestas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac dui sed nunc sagittis maximus.Lorem ipsum dolor sit amet, consectetur ...</p>
                                        <div class="pricing">
                                            <span>$200 <del>$210</del></span>
                                        </div>
                                        <div class="cate">
                                            <span><strong>Categories:</strong></span>
                                            <span><a href="#">Cover,</a></span>
                                            <span><a href="#">Seat,</a></span>
                                            <span><a href="#">Car,</a></span>
                                            <span><a href="#">Parts</a></span>
                                        </div>
                                        <div class="color_pd">
                                            <span>Color:</span>
                                            <a class="red active" href="#"></a>
                                            <a class="green" href="#"></a>
                                            <a class="blue" href="#"></a>
                                            <a class="yellow" href="#"></a>
                                            <a class="orange" href="#"></a>
                                        </div>
                                        <div class="size_pd">
                                            <span>SIZE:</span>
                                            <a href="#">Small</a>
                                            <a href="#">Medium</a>
                                            <a href="#">Large</a>
                                            <a href="#">Extra Large</a>
                                        </div>
                                        <div class="quantity-add-cart">
                                            <span class="quantity">
                                                <input type="number" min="1" max="1000" step="1" value="1" />
                                            </span>
                                            <div class="cart-btn">
                                                <a class="button-1" href="#"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                        <div class="quick-view-sahre mt-30">
                                            <span><strong>Share :</strong></span>
                                            <span><a href="#"><i class="fab fa-facebook-f"></i></a></span>
                                            <span><a href="#"><i class="fab fa-twitter"></i></a></span>
                                            <span><a href="#"><i class="fab fa-pinterest-p"></i></a></span>
                                            <span><a href="#"><i class="fab fa-instagram"></i></a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row product_details_bottom mt-30">
                                <div class="product-details-tab">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" role="tab" aria-controls="description" aria-selected="true">Description</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="info-tab" data-bs-toggle="tab" data-bs-target="#info" role="tab" aria-controls="info" aria-selected="false">Additional Information</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" role="tab" aria-controls="review" aria-selected="false">Review</button>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                                            <div class="pd-tab-item">
                                                <div class="pd-description">
                                                    <p>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. One</p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                                            <div class="pd-tab-item">
                                                <div class="pd-additional-info table-responsive">
                                                    <table class="table table-bordered">
                                                        <tbody>
                                                            <tr>
                                                                <td>Capacity</td>
                                                                <td>5 Kg</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Color</td>
                                                                <td>Black, Brown, Red,</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Water Resistant</td>
                                                                <td>Yes</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Material</td>
                                                                <td>Artificial Leather</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                                            <div class="pd-tab-item">
                                                <h3 class="review-title">2 Reviews</h3>
                                                <ul class="p_review">
                                                    <!-- Single -->
                                                    <li class="review-single">
                                                        <img src="assets/img/team/1.jpg" alt="avatar">
                                                            <div class="content">
                                                                <div class="review-info">
                                                                    <h5>Alea Brooks</h5>
                                                                    <small> Jun 01, 2021 </small>
                                                                </div>
                                                                <div class="ratting">
                                                                    <span><i class="fas fa-star"></i></span>
                                                                    <span><i class="fas fa-star"></i></span>
                                                                    <span><i class="fas fa-star"></i></span>
                                                                    <span><i class="fas fa-star"></i></span>
                                                                    <span><i class="fas fa-star"></i></span>
                                                                </div>
                                                                <div class="revie-con">
                                                                    <p>Lorem Ipsumin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate</p>
                                                                </div>
                                                            </div>
                                                    </li>
                                                    <!-- Single -->
                                                    <li class="review-single">
                                                        <img src="assets/img/team/1.jpg" alt="avatar">
                                                            <div class="content">
                                                                <div class="review-info">
                                                                    <h5>Alea Brooks</h5>
                                                                    <small> Jun 01, 2021 </small>
                                                                </div>
                                                                <div class="ratting">
                                                                    <span><i class="fas fa-star"></i></span>
                                                                    <span><i class="fas fa-star"></i></span>
                                                                    <span><i class="fas fa-star"></i></span>
                                                                    <span><i class="fas fa-star"></i></span>
                                                                    <span><i class="fas fa-star"></i></span>
                                                                </div>
                                                                <div class="revie-con">
                                                                    <p>Lorem Ipsumin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate</p>
                                                                </div>
                                                            </div>
                                                    </li>
                                                </ul>
                                                <div class="product-review-form">
                                                    <div class="row">
                                                        <div class="col-md-7">
                                                            <h3>Add a review</h3>
                                                            <div class="ratting mb-30">
                                                                <span><i class="fas fa-star"></i></span>
                                                                <span><i class="fas fa-star"></i></span>
                                                                <span><i class="fas fa-star"></i></span>
                                                                <span><i class="fas fa-star"></i></span>
                                                                <span><i class="fas fa-star"></i></span>
                                                            </div>
                                                            <form action="#">
                                                                <textarea name="review-message" class="form-control" placeholder="Your Review" spellcheck="false"></textarea>
                                                                <input type="text" name="name" class="form-control" placeholder="Your Name">
                                                                    <input type="email" name="email" class="form-control" placeholder="Your Email">
                                                                        <button class="button-1" type="submit">Submit Review</button>
                                                                    </form>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                    </div>
                                </div>
                                {/* <!-- Section Headding -->
                                <div class="row mt-30 mb-30">
                                    <div class="col-sm-6 align-self-center">
                                        <div class="section-headding-title">
                                            <h2>Related Products</h2>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 align-self-center">
                                        <div class="section-headding-all">
                                            <a class="button-1" href="shop.html">View All <i class="bi bi-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="related-product-slider owl-carousel">
                                            <!-- Single -->
                                            <div class="product-item">
                                                <div class="sale-badge"><span>Sale</span></div>
                                                <!-- Thumbnail -->
                                                <div class="product-thumbnail">
                                                    <div class="img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/1.png" alt="product">
                                                        </a>
                                                    </div>
                                                    <a class="wishlist" href="wishlist.html"><i class="far fa-heart"></i></a>
                                                    <div class="product-overly-btn">
                                                        <a data-bs-toggle="modal" data-bs-target="#QuickViewModal" href="#"><i class="far fa-eye"></i></a>
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
                                            <!-- Single -->
                                            <div class="product-item">
                                                <div class="discount-badge"><span>-33%</span></div>
                                                <!-- Thumbnail -->
                                                <div class="product-thumbnail">
                                                    <div class="img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/3.png" alt="product">
                                                        </a>
                                                    </div>
                                                    <a class="wishlist" href="wishlist.html"><i class="far fa-heart"></i></a>
                                                    <div class="product-overly-btn">
                                                        <a data-bs-toggle="modal" data-bs-target="#QuickViewModal" href="#"><i class="far fa-eye"></i></a>
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
                                            <!-- Single -->
                                            <div class="product-item">
                                                <div class="discount-badge"><span>-33%</span></div>
                                                <!-- Thumbnail -->
                                                <div class="product-thumbnail">
                                                    <div class="img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/2.png" alt="product">
                                                        </a>
                                                    </div>
                                                    <a class="wishlist" href="wishlist.html"><i class="far fa-heart"></i></a>
                                                    <div class="product-overly-btn">
                                                        <a data-bs-toggle="modal" data-bs-target="#QuickViewModal" href="#"><i class="far fa-eye"></i></a>
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
                                            <!-- Single -->
                                            <div class="product-item">
                                                <div class="sale-badge"><span>New</span></div>
                                                <!-- Thumbnail -->
                                                <div class="product-thumbnail">
                                                    <div class="img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/7.png" alt="product">
                                                        </a>
                                                    </div>
                                                    <a class="wishlist" href="wishlist.html"><i class="far fa-heart"></i></a>
                                                    <div class="product-overly-btn">
                                                        <a data-bs-toggle="modal" data-bs-target="#QuickViewModal" href="#"><i class="far fa-eye"></i></a>
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
                                            <!-- Single -->
                                            <div class="product-item">
                                                <!-- Thumbnail -->
                                                <div class="product-thumbnail">
                                                    <div class="img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/4.png" alt="product">
                                                        </a>
                                                    </div>
                                                    <a class="wishlist" href="wishlist.html"><i class="far fa-heart"></i></a>
                                                    <div class="product-overly-btn">
                                                        <a data-bs-toggle="modal" data-bs-target="#QuickViewModal" href="#"><i class="far fa-eye"></i></a>
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
                                            <!-- Single -->
                                            <div class="product-item">
                                                <div class="sale-badge"><span>Sale</span></div>
                                                <!-- Thumbnail -->
                                                <div class="product-thumbnail">
                                                    <div class="img">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/5.png" alt="product">
                                                        </a>
                                                    </div>
                                                    <a class="wishlist" href="wishlist.html"><i class="far fa-heart"></i></a>
                                                    <div class="product-overly-btn">
                                                        <a data-bs-toggle="modal" data-bs-target="#QuickViewModal" href="#"><i class="far fa-eye"></i></a>
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
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    </div>
            </section>
            {/* End Shop Section */}
        </>
    )
}
