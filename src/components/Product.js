import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";


function Product() {
    let [product, setProduct] = useState({});
    // let [product_rating, setProductRating] = useState(0);
    // let [product_count, setProductCount] = useState(0);
    let { id } = useParams();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/" + id).then((res) => {
            setProduct(res.data);
            // setProductRating(res.data.product.rating.rate);
            // setProductCount(res.data.product.rating.count);
        }, (err) => {
            console.log(err);
        })
    }, []);

    return (
        <>
            <div className="super_container">
                <header className="header" style={{ display: 'none' }}>
                    <div className="header_main">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                                    <div className="header_search">
                                        <div className="header_search_content">
                                            <div className="header_search_form_container">
                                                <form action="#" className="header_search_form clearfix">
                                                    <div className="custom_dropdown">
                                                        <div className="custom_dropdown_list"> <span className="custom_dropdown_placeholder clc">All Categories</span> <i className="fas fa-chevron-down" />
                                                            <ul className="custom_list clc">
                                                                <li><a className="clc" href="#">All Categories</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="single_product">
                    <div className="container-fluid" style={{ backgroundColor: '#fff', padding: 11 }}>
                        <div className="row">
                            <div className="col-lg-6 order-lg-2 order-1">
                                <div className="image_selected"><img src={product.image} alt="true" /></div>
                            </div>
                            <div className="col-lg-6 order-3">
                                <div className="product_description">
                                    <nav>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#">Category</a></li>
                                            <li className="breadcrumb-item active">{product.category}</li>
                                        </ol>
                                    </nav>
                                    <div className="product_name">{product.title}</div>
                                    <div className="product-rating">
                                        {/* <span className="badge badge-success"><i className="fa fa-star" /> {product_rating} Star</span> */}
                                        {/* <span className="rating-review"> {product_count} Reviews</span> */}
                                    </div>
                                    <div> <span className="product_price">{product.price}</span> <strike className="product_discount"> <span style={{ color: 'black' }}>₹ 2,000<span> </span></span></strike> </div>
                                    <div> <span className="product_saved">You Saved:</span> <span style={{ color: 'black' }}>₹ 2,000<span> </span></span></div>
                                    <hr className="singleline" />
                                    <div> <span className="product_info">{product.description}</span></div>

                                    <hr className="singleline" />
                                    <div className="order_info d-flex flex-row">
                                        <form action="#">
                                        </form></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product;