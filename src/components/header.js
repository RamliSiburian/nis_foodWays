import React from 'react'
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from '../pages/login';


function Header() {
    return (
        <div className="header pb-5">
            <div className="header-info d-lg-flex gap-5 w-75 m-auto">
                <div className="left">
                    <div className="head-title">
                        <h1>Are You Hungry ?</h1>
                        <h1>Express Home Delivery</h1>
                    </div>
                    <div className="head-content d-md-flex gap-3 mt-4">
                        <div className="hr-image text-center mb-sm-3" >
                            <img src='./image/hr.png' alt="" />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veritatis totam quo soluta corporis inventore laborum. Ex maiores, fugiat rem, natus tenetur molestias quisquam praesentium quam necessitatibus, a sequi esse?
                        </p>
                    </div>
                </div>
                <div className="right text-sm-center mt-sm-5">
                    <img src='./image/pizza.png' alt="pizza" />
                </div>
            </div>
        </div>

    )
}

export default Header