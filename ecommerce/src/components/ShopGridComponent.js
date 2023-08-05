import React, { useState } from 'react'

export default function ShopGridComponent() {
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
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h2>Shop Grid</h2>
                        </div>
                        <div class="col-md-6 align-self-center">
                            <ul class="text-right">
                                <li><a href="index.html">Home</a></li>
                                <li>Shop Grid</li>
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
                            {/* ltn__shop-options */}
                            <div class="row mb-30">
                                <div class="col-12">
                                    <div class="ltn__shop-options">
                                        <div class="list-single">
                                            <div class="ltn__grid-list-tab-menu ">
                                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button className={gridview ? 'nav-link active' : 'nav-link'} onClick={openGridview}><i className="fas fa-th"></i></button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className={listview ? 'nav-link active' : 'nav-link'} onClick={openListview}><i className="fas fa-list-ul"></i></button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="list-single">
                                            <div class="showing-product-number text-right">
                                                <span>Showing 1–12 of 18 results</span>
                                            </div>
                                        </div>
                                        <div class="list-single">
                                            <div class="woo-product-shorting">
                                                <select name="srot" style={{ height: "35px", marginTop: "10px" }}>
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
                            <div class="row">
                                <div class="tab-content" id="myTabContent">
                                    {/* Shop GridView */}
                                    <div className={"tab-pane fade shop-gridview " + gridview} id="gridView" role="tabpanel" aria-labelledby="gridView-tab">
                                        <div class="row">
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
                                        <div class="row">
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
                            <div class="row mt-10 mb-30 text-center">
                                <div class="col-lg-12">
                                    <div class="fodo_pagination">
                                        <ul>
                                            <li><a href="#"><i class="fas fa-angle-left"></i></a></li>
                                            <li><a href="#">1</a></li>
                                            <li><span>2</span></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#"><i class="fas fa-angle-right"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Shop Section */}
        </>
    )
}
