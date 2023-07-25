import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import jQuery from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function HomeComponent() {

	const backgroundImageUrl1 = 'assets/img/slider1.jpg';
	const backgroundImageUrl2 = 'assets/img/slider2.jpg';
	const backgroundImageUrl3 = 'assets/img/slider3.jpg';
	const banner1 = 'assets/img/banner.jpg';
	const banner2 = 'assets/img/banner2.jpg';

	// Only 8,12 or 16 product will be get from the server
	const popularProducts = [
		{
			imgsrc: "assets/img/populerProduct/1.png",
			name: "Purnava Omega 3 Enri...",
			price: 220,
			discountPrice: 200,
			discountRate: 30
		},
		{
			imgsrc: "assets/img/populerProduct/2.png",
			name: "Purnava Omega 3 Enri...",
			price: 220,
			discountPrice: 200,
			discountRate: 35
		},
		{
			imgsrc: "assets/img/populerProduct/3.png",
			name: "Purnava Omega 3 Enri...",
			price: 220,
			discountPrice: 200,
			discountRate: 25
		},
		{
			imgsrc: "assets/img/populerProduct/4.png",
			name: "Purnava Omega 3 Enri...",
			price: 220,
			discountPrice: 200,
			discountRate: 30

		},
		{
			imgsrc: "assets/img/populerProduct/5.png",
			name: "Purnava Omega 3 Enri...",
			price: 220,
			discountPrice: 200,
			discountRate: 40
		},
		{
			imgsrc: "assets/img/populerProduct/6.png",
			name: "Purnava Omega 3 Enri...",
			price: 220,
			discountPrice: 200,
			discountRate: 20
		},
		{
			imgsrc: "assets/img/populerProduct/7.png",
			name: "Purnava Omega 3 Enri...",
			price: 220,
			discountPrice: 200,
			discountRate: 50
		},
		{
			imgsrc: "assets/img/populerProduct/8.png",
			name: "Purnava Omega 3 Enri...",
			price: 220,
			discountPrice: 200,
			discountRate: 10
		}
	];

	const hotDayProducts = [
		{
			productTitle: "Goodday Fresh Pasteur Milk 2 Liter",
			productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac dui sed nunc sagittis maximus.",
			price: 220,
			discountPrice: 200,
			reviews: 200,
			// saleEndDate: "Jan 30, 2024",
			saleEndDate: "2023/11/19",
			imgsrc: "assets/img/populerProduct/1.png",
		},
		{
			productTitle: "Goodday Fresh Pasteur Milk 2 Liter",
			productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac dui sed nunc sagittis maximus.",
			price: 150,
			discountPrice: 100,
			reviews: 10,
			saleEndDate: "2023/8/25",
			imgsrc: "assets/img/populerProduct/2.png",
		},
		{
			productTitle: "Goodday Fresh Pasteur Milk 2 Liter",
			productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac dui sed nunc sagittis maximus.",
			price: 400,
			discountPrice: 300,
			reviews: 20,
			saleEndDate: "2023/8/19",
			imgsrc: "assets/img/populerProduct/3.png",
		}
	];

	// Only 4 product will be get from the server
	const topRatedProducts = [
		{
			imgsrc: "assets/img/populerProduct/1.png",
			name: "Fresh Red Seedless",
			price: 220,
			discountPrice: 200,
		},
		{
			imgsrc: "assets/img/populerProduct/2.png",
			name: "Fresh Red Seedless",
			price: 220,
			discountPrice: 200,
		},
		{
			imgsrc: "assets/img/populerProduct/3.png",
			name: "Fresh Red Seedless",
			price: 220,
			discountPrice: 200,
		},
		{
			imgsrc: "assets/img/populerProduct/4.png",
			name: "Fresh Red Seedless",
			price: 220,
			discountPrice: 200,
		}
	]

	// Only 4 product will be get from the server
	const hotDealProducts = [
		{
			imgsrc: "assets/img/populerProduct/3.png",
			name: "Fresh Red Seedless",
			price: 220,
			discountPrice: 200
		},
		{
			imgsrc: "assets/img/populerProduct/7.png",
			name: "Fresh Red Seedless",
			price: 220,
			discountPrice: 200
		},
		{
			imgsrc: "assets/img/populerProduct/1.png",
			name: "Fresh Red Seedless",
			price: 220,
			discountPrice: 200
		},
		{
			imgsrc: "assets/img/populerProduct/6.png",
			name: "Fresh Red Seedless",
			price: 220,
			discountPrice: 200
		}
	]

	// Only 4 product will be get from the server
	const bestsellerProducts = [
		{
			imgsrc: "assets/img/populerProduct/5.png",
			name: "Fresh Red Seedless",
			price: 220,
			discountPrice: 200
		},
		{
			imgsrc: "assets/img/populerProduct/6.png",
			name: "Fresh Red Seedless",
			price: 220,
			discountPrice: 200
		},
		{
			imgsrc: "assets/img/populerProduct/7.png",
			name: "Fresh Red Seedless",
			price: 220,
			discountPrice: 200
		},
		{
			imgsrc: "assets/img/populerProduct/8.png",
			name: "Fresh Red Seedless",
			price: 220,
			discountPrice: 200
		}
	]

	const featuredProducts = [
		{
			imgsrc: "assets/img/populerProduct/3.png",
			name: "Purnava Omega 3 Enri...",
			price: 220,
			discountPrice: 200,
			discountRate: 25,
			new: true
		},
		{
			imgsrc: "assets/img/populerProduct/4.png",
			name: "Purnava Omega 3 Enri...",
			price: 220,
			discountPrice: 200,
			discountRate: 30,
			new: false

		},
		{
			imgsrc: "assets/img/populerProduct/1.png",
			name: "Purnava Omega 3 Enri...",
			price: 220,
			discountPrice: 200,
			discountRate: 40,
			new: false
		},
		{
			imgsrc: "assets/img/populerProduct/3.png",
			name: "Purnava Omega 3 Enri...",
			price: 220,
			discountPrice: 200,
			discountRate: 20,
			new: false
		},
		{
			imgsrc: "assets/img/populerProduct/2.png",
			name: "Purnava Omega 3 Enri...",
			price: 220,
			discountPrice: 200,
			discountRate: 30,
			new: false

		},
		{
			imgsrc: "assets/img/populerProduct/7.png",
			name: "Purnava Omega 3 Enri...",
			price: 220,
			discountPrice: 200,
			discountRate: 40,
			new: false
		},
		{
			imgsrc: "assets/img/populerProduct/6.png",
			name: "Purnava Omega 3 Enri...",
			price: 220,
			discountPrice: 200,
			discountRate: 20,
			new: false
		}
	]

	const latestBlogs = [
		{
			imgsrc: "assets/img/blog/1.jpg",
			name: "Vogue Shopping Weekend 2021.",
			shortDescription: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor...",
			authorName: "Sarah Taylor",
			authorImgsrc: "assets/img/author.jpg",
			date: "19 Nov 2021"
		},
		{
			imgsrc: "assets/img/blog/2.jpg",
			name: "Vogue Shopping Weekend 2021.",
			shortDescription: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor...",
			authorName: "Sarah Taylor",
			authorImgsrc: "assets/img/author.jpg",
			date: "19 Nov 2021"
		},
		{
			imgsrc: "assets/img/blog/3.jpg",
			name: "Vogue Shopping Weekend 2021.",
			shortDescription: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor...",
			authorName: "Sarah Taylor",
			authorImgsrc: "assets/img/author.jpg",
			date: "19 Nov 2021"
		}
	]

	// for countdown in "Deals Hot Of The Day"
	useEffect(() => {
		const updateCountdown = () => {
			const dealshotDayProduct = $(".owl-item.active").eq(1);
			const time = dealshotDayProduct.find('.content-countdwon');
			let timeleft = new Date(time.attr('data-countdown-codepopular')).getTime() - new Date().getTime() + (1000 * 60 * 60 * 24);
			// console.log(timeleft);

			if (timeleft > 0) {
				let $days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
				let $hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				let $minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
				let $seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
				// time.innerHTML = time.replace('%d', $days).replace('%h', $hours).replace('%m', $minutes).replace('%s', $seconds);
				time.find('.days').html($days + " <small>days</small>");
				time.find('.hours').html($hours + " <small>hours</small>");
				time.find('.minutes').html($minutes + " <small>minutes</small>");
				time.find('.secends').html($seconds + " <small>sec</small>");
			}
			else {
				time.find('.days').html(0 + " <small>days</small>");
				time.find('.hours').html(0 + " <small>hours</small>");
				time.find('.minutes').html(0 + " <small>minutes</small>");
				time.find('.secends').html(0 + " <small>sec</small>");
			}
		};

		// Update countdown every second
		const interval = setInterval(updateCountdown, 1000);

		// Clean up the interval when component unmounts
		return () => clearInterval(interval);
	}, []);


	// for + or - in "Deals Hot Of The Day" product
	useEffect(() => {
		const updateCountdown = () => {
			jQuery('.quantity').each(function () {
				var spinner = jQuery(this),
					input = spinner.find('input[type="number"]'),
					btnUp = spinner.find('.quantity-up'),
					btnDown = spinner.find('.quantity-down'),
					min = input.attr('min'),
					max = input.attr('max');

				btnUp.off('click').on('click', function () {
					var oldValue = parseFloat(input.val());
					if (oldValue >= max) {
						var newVal = oldValue;
					} else {
						var newVal = oldValue + 1;
					}
					spinner.find("input").val(newVal);
					spinner.find("input").trigger("change");
				});

				btnDown.off('click').on('click', function () {
					var oldValue = parseFloat(input.val());
					if (oldValue <= min) {
						var newVal = oldValue;
					} else {
						var newVal = oldValue - 1;
					}
					spinner.find("input").val(newVal);
					spinner.find("input").trigger("change");
				});

			});
		}
		updateCountdown();
	}, []);

	return (
		<>
			{/* Start Hero Area */}
			<section className="hero-area hero_container pt-30 pb-30">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<div className="fodo_category_menu h-100">
								<div className="ltn__category-menu-title">
									<h2>all categories</h2>
								</div>
								<div className="ltn__category_list">
									<ul>
										<li className="cate_drop cate_mega"><a href="">Vegetables and Fruits </a>
											<ul className="sub-menu-cate mega-menu-cate">
												<li><a className="headding" href="">Satchels </a>
													<ul>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
													</ul>
												</li>
												<li><a className="headding" href="">Fresh Meat </a>
													<ul>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
													</ul>
												</li>
												<li><a className="headding" href="">Seafood </a>
													<ul>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
													</ul>
												</li>
												<li><a className="headding" href="">Seafood </a>
													<ul>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
													</ul>
												</li>
											</ul>
										</li>
										<li className="cate_drop cate_mega"><a href="">Fruits </a>
											<ul className="sub-menu-cate mega-menu-cate">
												<li><a className="headding" href="">Satchels </a>
													<ul>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
													</ul>
												</li>
												<li><a className="headding" href="">Fresh Meat </a>
													<ul>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
													</ul>
												</li>
												<li><a className="headding" href="">Seafood </a>
													<ul>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
													</ul>
												</li>
											</ul>
										</li>
										<li className="cate_drop cate_mega"><a href="">Oil and Vinegar </a>
											<ul className="sub-menu-cate mega-menu-cate w-500">
												<li><a className="headding" href="">Satchels </a>
													<ul>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
													</ul>
												</li>
												<li><a className="headding" href="">Fresh Meat </a>
													<ul>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
													</ul>
												</li>
											</ul>
										</li>
										<li className="cate_drop"><a href="">Apple Juice</a>
											<ul className="sub-menu-cate">
												<li className="cate_drop"><a href="">Satchels </a>
													<ul>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
													</ul>
												</li>
												<li className="cate_drop"><a href="">Satchels </a>
													<ul>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
													</ul>
												</li>
												<li className="cate_drop"><a href="">Satchels </a>
													<ul>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
														<li><a href="">Satchels</a></li>
													</ul>
												</li>
												<li><a href="">Satchels </a> </li>
												<li><a href="">Satchels </a> </li>
												<li><a href="">Satchels </a> </li>
											</ul>
										</li>
										<li className="cate_drop"><a href="">Ocean Food</a>
											<ul className="sub-menu-cate">
												<li><a href="">Cross Body</a></li>
												<li><a href="">Satchels</a></li>
												<li><a href="">Sholuder</a></li>
												<li><a href="">Toter</a></li>
												<li><a href="">Clutches</a></li>
												<li><a href="">Cross Body</a></li>
											</ul>
										</li>
										<li className="cate_drop"><a href="">Butter & Eggs</a>
											<ul className="sub-menu-cate">
												<li><a href="">Cross Body</a></li>
												<li><a href="">Satchels</a></li>
												<li><a href="">Sholuder</a></li>
												<li><a href="">Toter</a></li>
												<li><a href="">Clutches</a></li>
												<li><a href="">Cross Body</a></li>
											</ul>
										</li>
										<li><a href="">Fresh Meat</a></li>
										<li><a href="">Dry Nuts</a></li>
										<li><a href="">Vegetables</a></li>
										<li><a href="">Milk & Cream</a></li>
									</ul>
								</div>
							</div>
						</div>
						{/* Slider */}
						<div className="col-lg-9">
							<OwlCarousel className='owl-theme' loop items={1} autoplay={true} autoplayTimeout={4000}>
								{/* single */}
								<div className="hs_item_single2" style={{ backgroundImage: `url(${backgroundImageUrl1})` }}>
									<div className="container">
										<div className="row">
											<div className="col-lg-6">
												<h2>Fresh Food & Healthly Organic Food</h2>
												<div className="cont">
													<p>Free Shipping on all Your Order</p>
												</div>
												<a className="button-1" href="shop.html">Shop Now <i
													className="bi bi-arrow-right"></i></a>
											</div>
										</div>
									</div>
								</div>

								{/* single */}
								<div className="hs_item_single2" style={{ backgroundImage: `url(${backgroundImageUrl2})` }}>
									<div className="container">
										<div className="row">
											<div className="col-lg-6">
												<h2>Fresh Food & Healthly Organic Food</h2>
												<div className="cont">
													<p>Free Shipping on all Your Order</p>
												</div>
												<a className="button-1" href="shop.html">Shop Now <i
													className="bi bi-arrow-right"></i></a>
											</div>
										</div>
									</div>
								</div>

								{/* single */}
								<div className="hs_item_single2" style={{ backgroundImage: `url(${backgroundImageUrl3})` }}>
									<div className="container">
										<div className="row">
											<div className="col-lg-6">
												<h2>Fresh Food & Healthly Organic Food</h2>
												<div className="cont">
													<p>Free Shipping on all Your Order</p>
												</div>
												<a className="button-1" href="shop.html">Shop Now <i
													className="bi bi-arrow-right"></i></a>
											</div>
										</div>
									</div>
								</div>
							</OwlCarousel>
						</div>
					</div>
				</div >
			</section >
			{/* End Hero Area */}

			{/* Start Free  Shipping Area */}
			<section className="pt-30 pb-30">
				<div className="container">
					<div className="shipping-item-full">
						<div className="row">
							{/* Single */}
							<div className="col-lg-3 col-md-6 mb-30">
								<div className="shipping-item">
									<div className="iocn">
										<i className="bi bi-truck"></i>
									</div>
									<div className="content">
										<h3> Free Shipping</h3>
										<p>Free UK shipping when you spend £30.</p>
									</div>
								</div>
							</div>
							{/* Single */}
							<div className="col-lg-3 col-md-6 mb-30">
								<div className="shipping-item">
									<div className="iocn">
										<i className="fab fa-pagelines"></i>
									</div>
									<div className="content">
										<h3> Get Fresh Products</h3>
										<p>Find a range of best online organic food.</p>
									</div>
								</div>
							</div>
							{/* Single */}
							<div className="col-lg-3 col-md-6 mb-30">
								<div className="shipping-item">
									<div className="iocn">
										<i className="fas fa-dollar-sign"></i>
									</div>
									<div className="content">
										<h3> Moneyback Offer</h3>
										<p>Free UK shipping when you spend £30.</p>
									</div>
								</div>
							</div>
							{/* Single */}
							<div className="col-lg-3 col-md-6 mb-30">
								<div className="shipping-item">
									<div className="iocn">
										<i className="bi bi-shield-lock"></i>
									</div>
									<div className="content">
										<h3> Safe Payment</h3>
										<p>We are using secure payment methods.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* End Free Shipping Area */}

			{/* Start Banner Area Area */}
			<div className="pt-20">
				<div className="container">
					<div className="row">
						<div className="col-md-6 mb-20">
							<div className="banner_item_3">
								<a href="shop.html">
									<img src="assets/img/banner1-1.jpg" alt="banner" />
								</a>
							</div>
						</div>
						<div className="col-md-6 mb-20">
							<div className="banner_item_3">
								<a href="shop.html">
									<img src="assets/img/banner1-2.jpg" alt="banner" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* End Banner Area */}


			{/* Start Popular Product Area */}
			<div className="pt-20 pb-20">
				<div className="container">
					{/* Section Headding */}
					<div className="row mb-30">
						<div className="col-sm-6 align-self-center">
							<div className="section-headding-title">
								<h2>Popular Products</h2>
							</div>
						</div>
						<div className="col-sm-6 align-self-center">
							<div className="section-headding-all">
								<a className="button-1" href="shop.html">View All <i className="bi bi-arrow-right"></i></a>
							</div>
						</div>
					</div>
					<div className="row">
						{popularProducts.map((popularProduct) => (
							<div className="popular_products mb-30">
								<div className="product-item">
									<div className="discount-badge"><span>-{popularProduct.discountRate}%</span></div>
									{/* Thumbnail */}
									<div className="product-thumbnail">
										<div className="img">
											<a href="product-details.html">
												<img src={popularProduct.imgsrc} alt="product" />
											</a>
										</div>
										<a className="wishlist" href="wishlist.html"><i className="far fa-heart"></i></a>
										<div className="product-overly-btn">
											<a data-bs-toggle="modal" data-bs-target="#QuickViewModal" href=""><i
												className="far fa-eye"></i></a>
										</div>
										<a className="add-to-cart" href="">Add to Cart</a>
									</div>
									<div className="product-content">
										<div className="ratting">
											<span><i className="fas fa-star"></i></span>
											<span><i className="fas fa-star"></i></span>
											<span><i className="fas fa-star"></i></span>
											<span><i className="fas fa-star"></i></span>
											<span><i className="fas fa-star"></i></span>
										</div>
										<h4><a href="product-details.html">{popularProduct.name}</a></h4>
										<div className="pricing">
											<span>${popularProduct.discountPrice} <del>${popularProduct.price}</del></span>
										</div>
									</div>
								</div>
							</div>
						))
						}
					</div>
				</div>
			</div>
			{/* End Popular Product Area */}


			{/* Start Deal Product Area */}
			<section className="pt-20 pb-50">
				<div className="container">
					<div className="row">

						<div className="col-lg-9">
							<div className="deal-product-sec h-100">
								<h2 className="d_title"> Deals Hot of The Day </h2>
								<OwlCarousel className='owl-theme' loop items={1} autoplay={true} autoplayTimeout={4000} touchDrag={true} mouseDrag={true} autoplayHoverPause={true}>

									{hotDayProducts.map((product) => (
										<div className="deal_p_item">
											<div className="row">
												<div className="col-md-5 text-center">
													<div className="thumbnail">
														<a href="product-details.html">
															<img src={product.imgsrc} alt="img" />
														</a>
													</div>
												</div>
												<div className="col-md-7 align-self-center">
													<div className="content">
														<div className="content-countdwon"
															data-countdown-codepopular={product.saleEndDate}>
															<ul>
																<li><span className='days'></span></li>
																<li><span className='hours'></span></li>
																<li><span className='minutes'></span></li>
																<li><span className='secends'></span></li>
															</ul>
														</div>
														<h2><a href="product-details.html">{product.productTitle}</a>
														</h2>
														<div className="pricing">
															<span>${product.discountPrice} <del>${product.price}</del></span>
														</div>
														<div className="ratting">
															<span><i className="fas fa-star"></i></span>
															<span><i className="fas fa-star"></i></span>
															<span><i className="fas fa-star"></i></span>
															<span><i className="fas fa-star"></i></span>
															<span><i className="fas fa-star"></i></span>
															<span><small>( {product.reviews} Reviews )</small></span>
														</div>
														<p>{product.productDescription}</p>
														<div className="quantity-add-cart">
															<span className="quantity">
																<input type="number" min="1" max="1000" step="1" defaultValue="1" />
																<div className="quantity-nav">
																	<div className="quantity-button quantity-up">+</div>
																	<div className="quantity-button quantity-down">-</div>
																</div>
															</span>
															<div className="cart-btn">
																<a className="button-1" href=""><i className="fas fa-shopping-cart"></i>
																	Add to Cart</a>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

									))
									}
								</OwlCarousel>
							</div>
						</div>

						<div className="col-lg-3">
							<div className="d_top_rated_p h-100">
								<h2 className="d_title">Top rated products </h2>
								<div className="top-Reated_p_full">
									{topRatedProducts.map((product) => (
										<div className="tp_item_style">
											<div className="thumb">
												<a href="product-details.html">
													<img src={product.imgsrc} alt="img" />
												</a>
											</div>
											<div className="content">
												<h4><a href="product-details.html">{product.name}</a></h4>
												<div className="ratting">
													<span><i className="fas fa-star"></i></span>
													<span><i className="fas fa-star"></i></span>
													<span><i className="fas fa-star"></i></span>
													<span><i className="fas fa-star"></i></span>
													<span><i className="fas fa-star"></i></span>
												</div>
												<div className="pricing">
													<span>${product.discountPrice}<del>${product.price}</del></span>
												</div>
											</div>
										</div>
									))
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* End Deal Product Area */}


			{/* Start Banner Area */}
			<section className="pb-30">
				<div className="container">
					<div className="banner-section-1" style={{ backgroundImage: `url(${banner1})` }}>
						<div className="row">
							<div className="offset-lg-6 offset-md-4 col-md-8 col-lg-6">
								<div className="banner-section-1-content">
									<h4>Summer Sale</h4>
									<h2><span>39%</span> OFF</h2>
									<p>Free on all your order, Free Shipping and 30 days mony back guarantee</p>
									<a className="button-1 button-round" href="shop.html">Shop Now <i
										className="bi bi-arrow-right"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Start Banner Area */}


			{/* Start Product Widgets Area */}
			<section className="pt-30 pb-30">
				<div className="container">
					<div className="row">
						{/* Single */}
						<div className="col-lg-3 col-sm-6 mb-30">
							<div className="d_top_rated_p h-100">
								<h2 className="d_title">Hot Deals</h2>
								<div className="top-Reated_p_full">
									{hotDealProducts.map((product) => (
										<div className="tp_item_style">
											<div className="thumb">
												<a href="product-details.html">
													<img src={product.imgsrc} alt="img" />
												</a>
											</div>
											<div className="content">
												<h4><a href="product-details.html">{product.name}</a></h4>
												<div className="ratting">
													<span><i className="fas fa-star"></i></span>
													<span><i className="fas fa-star"></i></span>
													<span><i className="fas fa-star"></i></span>
													<span><i className="fas fa-star"></i></span>
													<span><i className="fas fa-star"></i></span>
												</div>
												<div className="pricing">
													<span>${product.discountPrice}<del>${product.price}</del></span>
												</div>
											</div>
										</div>
									))
									}
								</div>
							</div>
						</div>

						{/* Single */}
						<div className="col-lg-3  col-sm-6 mb-30">
							<div className="d_top_rated_p h-100">
								<h2 className="d_title">Top rated products </h2>
								<div className="top-Reated_p_full">
									{topRatedProducts.map((product) => (
										<div className="tp_item_style">
											<div className="thumb">
												<a href="product-details.html">
													<img src={product.imgsrc} alt="img" />
												</a>
											</div>
											<div className="content">
												<h4><a href="product-details.html">{product.name}</a></h4>
												<div className="ratting">
													<span><i className="fas fa-star"></i></span>
													<span><i className="fas fa-star"></i></span>
													<span><i className="fas fa-star"></i></span>
													<span><i className="fas fa-star"></i></span>
													<span><i className="fas fa-star"></i></span>
												</div>
												<div className="pricing">
													<span>${product.discountPrice} <del>${product.price}</del></span>
												</div>
											</div>
										</div>
									))
									}
								</div>
							</div>
						</div>

						{/* Single */}
						<div className="col-lg-3 col-sm-6 mb-30">
							<div className="d_top_rated_p h-100">
								<h2 className="d_title">Best Seller</h2>
								<div className="top-Reated_p_full">
									{bestsellerProducts.map((product) => (
										<div className="tp_item_style">
											<div className="thumb">
												<a href="product-details.html">
													<img src={product.imgsrc} alt="img" />
												</a>
											</div>
											<div className="content">
												<h4><a href="product-details.html">{product.name}</a></h4>
												<div className="ratting">
													<span><i className="fas fa-star"></i></span>
													<span><i className="fas fa-star"></i></span>
													<span><i className="fas fa-star"></i></span>
													<span><i className="fas fa-star"></i></span>
													<span><i className="fas fa-star"></i></span>
												</div>
												<div className="pricing">
													<span>${product.discountPrice} <del>${product.price}</del></span>
												</div>
											</div>
										</div>
									))
									}
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 mb-30">
							<div className="banner_2_s h-100" style={{ backgroundImage: `url(${banner2})` }}>
								<h4>85% FAT FREE</h4>
								<h2>Low-Fat Meet</h2>
								<p>Started ad <span>$79.99</span></p>
								<a href="shop.html" className="button-1 button-round bg-white">Shop Now <i
									className="bi bi-arrow-right"></i></a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* End Product Widgets Area */}


			{/* Start Call Action */}
			<div className="call_action_a pt-30">
				<div className="container">
					<div className="row">
						<div className="col-md-6 mb-30 align-self-center">
							<h2>Get A Free Service Or Make A Call</h2>
						</div>
						<div className="col-md-6 mb-30 text-right">
							<a className="button-1 bg-white" href="contact.html"><i className="fas fa-phone-volume"></i> MAKE A CALL</a>
						</div>
					</div>
				</div>
			</div>
			{/* End Call Action */}

			{/* Start Blog Area */}
			<section className="pt-70 pb-20">
				<div className="container">
					{/* Section Headding */}
					<div className="row mb-30">
						<div className="col-sm-6 align-self-center">
							<div className="section-headding-title">
								<h2>Latest Blog & News</h2>
							</div>
						</div>
						<div className="col-sm-6 align-self-center">
							<div className="section-headding-all">
								<a className="button-1" href="blog.html">View All <i className="bi bi-arrow-right"></i></a>
							</div>
						</div>
					</div>
					<div className="row">
						{latestBlogs.map((blog) => (
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="blog-item">
									<div className="thumbnail">
										<a href="single.html">
											<img src={blog.imgsrc} alt="blog" />
										</a>
										<div className="date">
											<span><i className="fas fa-calendar-alt"></i> {blog.date}</span>
										</div>
									</div>
									<div className="content">
										<h2><a href="single.html">{blog.name}</a></h2>
										<p>{blog.shortDescription}</p>
										<div className="bottom">
											<div className="left">
												<img src={blog.authorImgsrc} alt="img" />
												<span>{blog.name}</span>
											</div>
											<div className="right">
												<a href="single.html"><i className="bi bi-arrow-right"></i></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						))
						}
					</div>
				</div>
			</section>
		</>
	)
}
