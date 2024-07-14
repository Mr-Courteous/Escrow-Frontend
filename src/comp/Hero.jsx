import React from "react";
// import { ReactDOM } from "react";
import ImageCarousel from "./carousel"

function Hero() {
    return (
        <div className="hero">

            <div className="hero-one">

                <h1 className="hero-title">


                    Never buy or sell online without using Escrow.com

                </h1>

                <p className="hero-one-paragraph">
                    With Escrow.com you can buy and sell anything safely without the risk of chargebacks. Truly secure payments.

                </p>
                <div className="">
                    <input className="input-one" type="text" placeholder="your location" />
                    <input className="input-one" type="text" placeholder="your location" />
                    <input className="input-one" type="text" placeholder="your location" />
                    <input className="input-one" type="text" placeholder="your location" />


                </div>

                <div>

                    <button className="button-43">
                        Get started Now
                    </button>

                </div>



 




            </div>

            <div className="hero-two">




                <div className="hero-two-1">

                    <ImageCarousel />





                    {/* <img className='svg' src="/images/cash-payment-concept-illustration_114360-3320.avif" alt="images" /> */}

                </div>









                <div className="hero-two-2">

                </div>

                <div className="hero-two-2">

                    <h4 className="hero-title-2">
                        Complete all transactions without itch
                    </h4>

                    <p className="paragraphs">

                        Buyer and seller agree on terms

                    </p>

                    <p className="paragraphs">
                        BUyer pays Escrow.com

                    </p>

                    <p className="paragraphs">
                        Buyer ships the Merchandise

                    </p>

                    <p className="paragraphs">
                        Buyer Inspects Goods

                    </p>

                    <p className="paragraphs">
                        Escrow pays Seller

                    </p>

                </div>



            </div>



        </div>
    )
}

export default Hero; 