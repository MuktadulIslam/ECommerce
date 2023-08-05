import React, { useState } from 'react'

export default function ShopComponent() {
    const backgroundImageUrl = "assets/img/breadcrumb.jpg";
    const [gridview, setGridview] = useState('active show');
    const [listview, setListview] = useState('');

    const products = [
        {
            imgsrc: "assets/img/populerProduct/1.png",
            name: "Purnava Omega 3 Enri...",
            price: 220,
            discountPrice: 220,
            discountRate: 0,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid..."
        },
        {
            imgsrc: "assets/img/populerProduct/2.png",
            name: "Purnava Omega 3 Enri...",
            price: 220,
            discountPrice: 220,
            discountRate: 0,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid..."
        },
        {
            imgsrc: "assets/img/populerProduct/3.png",
            name: "Purnava Omega 3 Enri...",
            price: 220,
            discountPrice: 200,
            discountRate: 25,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid..."
        },
        {
            imgsrc: "assets/img/populerProduct/4.png",
            name: "Purnava Omega 3 Enri...",
            price: 220,
            discountPrice: 200,
            discountRate: 30,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid..."
        },
        {
            imgsrc: "assets/img/populerProduct/5.png",
            name: "Purnava Omega 3 Enri...",
            price: 220,
            discountPrice: 220,
            discountRate: 0,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid..."
        },
        {
            imgsrc: "assets/img/populerProduct/6.png",
            name: "Purnava Omega 3 Enri...",
            price: 220,
            discountPrice: 220,
            discountRate: 0,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid..."
        },
        {
            imgsrc: "assets/img/populerProduct/7.png",
            name: "Purnava Omega 3 Enri...",
            price: 220,
            discountPrice: 220,
            discountRate: 0,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid..."
        },
        {
            imgsrc: "assets/img/populerProduct/8.png",
            name: "Purnava Omega 3 Enri...",
            price: 220,
            discountPrice: 220,
            discountRate: 0,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid..."
        },
        {
            imgsrc: "assets/img/populerProduct/3.png",
            name: "Purnava Omega 3 Enri...",
            price: 220,
            discountPrice: 200,
            discountRate: 25,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid..."
        },
        {
            imgsrc: "assets/img/populerProduct/4.png",
            name: "Purnava Omega 3 Enri...",
            price: 220,
            discountPrice: 200,
            discountRate: 10,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid..."
        },
        {
            imgsrc: "assets/img/populerProduct/1.png",
            name: "Purnava Omega 3 Enri...",
            price: 220,
            discountPrice: 220,
            discountRate: 0,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid..."
        },
        {
            imgsrc: "assets/img/populerProduct/7.png",
            name: "Purnava Omega 3 Enri...",
            price: 220,
            discountPrice: 220,
            discountRate: 0,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid..."
        }
    ];

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
        }
    ];


    const openGridview = () => {
        setListview('')
        setGridview('active show');
    }

    const openListview = () => {
        setGridview('');
        setListview('active show')
    }


    return (
        <>
            {/* Start BreadCrumb Area */}
            <section className="breadcrumb-area pt-80 pb-80" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Shop</h2>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <ul className="text-right">
                                <li><a href="index.html">Home</a></li>
                                <li>Shop</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* End BreadCrumb Area */}

            {/* Start Shop Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {/* ltn__shop-options */}
                            <div className="row mb-30">
                                <div className="col-12">
                                    <div className="ltn__shop-options">
                                        <div className="list-single">
                                            <div className="ltn__grid-list-tab-menu ">
                                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button className={gridview ? 'nav-link active' : 'nav-link'} onClick={openGridview}><i className="fas fa-th"></i></button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className={listview ? 'nav-link active' : 'nav-link'} onClick={openListview}><i className="fas fa-list-ul"></i></button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="list-single">
                                            <div className="showing-product-number text-right">
                                                <span>Showing 1–12 of 18 results</span>
                                            </div>
                                        </div>
                                        <div className="list-single">
                                            <div className="woo-product-shorting">
                                                <select name="srot" style={{ height: "35px",marginTop: "10px" }}>
                                                    <option value="0">Default Sorting</option>
                                                    <option value="1">Sort by popularity</option>
                                                    <option value="2">Sort by new arrivals</option>
                                                    <option value="3">Sort by price: low to high</option>
                                                    <option value="4">Sort by price: high to low</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Products */}
                            <div className="row">
                                <div className="tab-content" id="myTabContent">
                                    {/* Shop GridView */}
                                    <div className={"tab-pane fade shop-gridview " + gridview} id="gridView" role="tabpanel" aria-labelledby="gridView-tab">
                                        <div className="row">
                                            {/* Single */}
                                            {products.map((product) => (
                                                <div className="popular_products mb-30">
                                                    <div className="product-item">
                                                        {product.discountRate ? (<div className="discount-badge"><span>-{product.discountRate}%</span></div>) : ''}
                                                        {/* Thumbnail */}
                                                        <div className="product-thumbnail">
                                                            <div className="img">
                                                                <a href="product-details.html">
                                                                    <img src={product.imgsrc} alt="product" />
                                                                </a>
                                                            </div>
                                                            <a className="wishlist" href="wishlist.html"><i className="far fa-heart"></i></a>
                                                            <div className="product-overly-btn">
                                                                <a data-bs-toggle="modal" data-bs-target="#QuickViewModal" href="#"><i className="far fa-eye"></i></a>
                                                            </div>
                                                            <a className="add-to-cart" href="#">Add to Cart</a>
                                                        </div>
                                                        <div className="product-content">
                                                            <div className="ratting">
                                                                <span><i className="fas fa-star"></i></span>
                                                                <span><i className="fas fa-star"></i></span>
                                                                <span><i className="fas fa-star"></i></span>
                                                                <span><i className="fas fa-star"></i></span>
                                                                <span><i className="fas fa-star"></i></span>
                                                            </div>
                                                            <h4><a href="product-details.html">{product.name}</a></h4>
                                                            <div className="pricing">
                                                                {product.discountRate ? (<span>${product.discountPrice}<del>${product.price}</del></span>) : (<span>${product.price}</span>)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>


                                    {/* Shop ListView */}
                                    <div className={"tab-pane fade shop-listview " + listview} id="listView" role="tabpanel" aria-labelledby="listView-tab">
                                        <div className="row">
                                            {/* Single */}
                                            {products.map((product) => (
                                                <div className="col-lg-12">
                                                    <div className="product-list-item mb-30">
                                                        {product.discountRate ? (<div className="discount-badge"><span>-{product.discountRate}%</span></div>) : ''}
                                                        <div className="row">
                                                            <div className="col-sm-4 d-flex">
                                                                <div className="thumbnail">
                                                                    <a href="product-details.html">
                                                                        <img src={product.imgsrc} alt="img" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-8 align-self-center">
                                                                <div className="content">
                                                                    <h2 className="title">
                                                                        <a href="product-details.html">{product.name}</a>
                                                                    </h2>
                                                                    <div className="ratting">
                                                                        <span><i className="fas fa-star"></i></span>
                                                                        <span><i className="fas fa-star"></i></span>
                                                                        <span><i className="fas fa-star"></i></span>
                                                                        <span><i className="fas fa-star"></i></span>
                                                                        <span><i className="fas fa-star"></i></span>
                                                                    </div>
                                                                    <div className="pricing">
                                                                        {product.discountRate ? (<span>${product.discountPrice}<del>${product.price}</del></span>) : (<span>${product.price}</span>)}
                                                                    </div>
                                                                    <p>{product.description}</p>
                                                                    <div className="product-hover-action">
                                                                        <a className="add-to-cart" href="#">Add to Cart</a>
                                                                        <ul>
                                                                            <li>
                                                                                <a data-bs-toggle="modal" data-bs-target="#QuickViewModal" href="#"><i className="far fa-eye"></i></a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#" title="Wishlist"><i className="far fa-heart"></i></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Pagination */}
                            <div className="row mt-10 mb-30 text-center">
                                <div className="col-lg-12">
                                    <div className="fodo_pagination">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-angle-left"></i></a></li>
                                            <li><a href="#">1</a></li>
                                            <li><span>2</span></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#"><i className="fas fa-angle-right"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Widgets */}
                        <div className="col-lg-4">
                            {/* Single */}
                            <div className="sidebar-widgets">
                                <h2>Search</h2>
                                <div className="wi_search_form">
                                    <form action="#">
                                        <input type="text" name="search" placeholder="Search Here.." />
                                        <button type="submit"><i className="bi bi-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            {/* Single */}
                            <div className="sidebar-widgets">
                                <h2>Categories</h2>
                                <ul>
                                    <li><a href="#"><i className="fas fa-angle-double-right"></i>  Fruits & Vegetable  </a></li>
                                    <li><a href="#"><i className="fas fa-angle-double-right"></i>  Meet & Fish </a></li>
                                    <li><a href="#"><i className="fas fa-angle-double-right"></i> Beverages </a></li>
                                    <li><a href="#"><i className="fas fa-angle-double-right"></i> Biscuits & Snacks </a></li>
                                    <li><a href="#"><i className="fas fa-angle-double-right"></i>  Breakfast</a></li>
                                    <li><a href="#"><i className="fas fa-angle-double-right"></i> Dairy Product </a></li>
                                    <li><a href="#"><i className="fas fa-angle-double-right"></i>  Package Foods</a></li>
                                </ul>
                            </div>
                            {/* Single */}
                            <div className="sidebar-widgets">
                                <h2>Popular Product</h2>
                                <div className="top-Reated_p_full">
                                    {/* Single */}
                                    {popularProducts.map((product) => (
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
                                    ))}

                                </div>
                            </div>

                            {/* Single */}
                            <div className="sidebar-widgets">
                                <h2>Tags</h2>
                                <div className="tagcloud">
                                    <a href="#">pasta</a>
                                    <a href="#">organic</a>
                                    <a href="#">grape</a>
                                    <a href="#">ege</a>
                                    <a href="#">rice</a>
                                    <a href="#">Food</a>
                                    <a href="#">fish</a>
                                    <a href="#">coffee</a>
                                    <a href="#">watermelon</a>
                                    <a href="#">vegetable</a>
                                    <a href="#">nutural</a>
                                    <a href="#">juice</a>
                                </div>
                            </div>
                            {/* Single */}
                            <div className="sidebar-widgets">
                                <h2>Archives</h2>
                                <ul>
                                    <li><a href="#"><i className="fas fa-angle-double-right"></i> September 2021</a></li>
                                    <li><a href="#"><i className="fas fa-angle-double-right"></i> October 2021</a></li>
                                    <li><a href="#"><i className="fas fa-angle-double-right"></i> August 2021</a></li>
                                    <li><a href="#"><i className="fas fa-angle-double-right"></i> July 2021</a></li>
                                    <li><a href="#"><i className="fas fa-angle-double-right"></i> June 2021</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Shop Section */}
        </>
    )
}
