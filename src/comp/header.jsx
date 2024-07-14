import React from "react";
// import { ReactDOM } from "react";

function Navbar() {
    return (
        <div className="nav">

            <div className="navside-one">
                <p className="Logo">
                    ESCROW<span className="Logo-span">.COM </span>
                </p>

            </div>

            <div className="navside-two">
                <ul>
                    <li><a href="/">Consumer</a></li>
                    <li><a href="/about">Broker</a></li>
                    <li><a href="/contact">Business</a></li>
                    <li><a href="/contact">Develepor</a></li>
                    <li><a href="/contact">Help</a></li>


                </ul>

            </div>

            <div className="navside-three">

                <ul>

                    {/* <li><a href="/contact">Business</a></li> */}
                    <li><a href="/contact">Login</a></li>
                    <li><a href="/contact">Signup</a></li>


                </ul>
            </div>


        </div>
    )
}

export default Navbar;