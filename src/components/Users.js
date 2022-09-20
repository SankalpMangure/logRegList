import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Users() {
    let [products, setProducts] = useState([]);
    // let arr = [1, 1, 1, 1, 1, 1];

    useEffect(() => {
        setTimeout(() => {
            axios.get("https://fakestoreapi.com/products").then((res) => {
                setProducts(res.data);
                // console.log(products);
            }, (err) => {
                console.log(err);
            })
        }, 5000);
    }, []);

    return (
        <div className="row">
            {products.length !== 0 && (
                products.map((product) => (
                    <div className="col-md-4">
                        <div className="d-flex justify-content-center container mt-5">
                            <div className="card p-3 bg-white"><i className="fa fa-apple" />
                                <div className="about-product text-center mt-2"><img src={product.image} width="150" height="150" alt="" />
                                    <div>
                                        <h4>{product.category}</h4>
                                        <Link to={"/product/" + product.id}>
                                            <h6 className="mt-0 text-black-50">{product.title}</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="stats mt-2">
                                    <div className="d-flex justify-content-between p-price"><span>price</span><span>{product.price}</span></div>
                                </div>
                                <div className="d-flex justify-content-between total font-weight-bold mt-4"><span>Rating</span><span>{product.rating.rate}</span></div>
                            </div>
                        </div>
                    </div>
                ))
            )}

            {products.length === 0 && (
                [...Array(6)].map(() => (
                    // arr.map(() => (
                    <div className="col-md-4">
                        <div className="d-flex justify-content-center container mt-5">
                            <div className="card p-3 bg-light"><i className="fa fa-apple" />
                                <div className="about-product text-center mt-2"><Skeleton circle={true} width={150} height={150} />
                                    <div>
                                        <h4><Skeleton /></h4>
                                        <h6 className="mt-0 text-black-50"><Skeleton /></h6>
                                    </div>
                                </div>
                                <div className="stats mt-2">
                                    <div className="justify-content-between p-price"><span><Skeleton /></span></div>
                                </div>
                                <div className="justify-content-between total font-weight-bold mt-4"><span><Skeleton /></span></div>
                            </div>
                        </div>
                    </div>
                ))
            )
            }
        </div >
    )
}

export default Users;