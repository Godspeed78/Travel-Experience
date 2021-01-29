import React from "react"
import payment1 from "./images/payment1.png"
import payment2 from "./images/payment2.png"
import payment3 from "./images/payment3.png"
import payment4 from "./images/payment4.png"

const Footer = () => {
    return(
        <>

<footer>
        <div class="footer-upper">
            <div class="container">
                <div class="newsletter text-center">
                    <div class="section-title section-title-white text-center">
                        <h2>Newsletter Signup</h2>
                        <div class="section-icon section-icon-white">
                            <i class="flaticon-diamond"></i>
                        </div>
                        <p>Subscribe to our weekly newsletter to get updated on our latest deals</p>
                    </div>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" id="search"/>
                            <a style={{color:"white"}}><span class="search_btn"><i class="fa fa-paper-plane" aria-hidden="true"></i> Sign Up</span></a>
                        </div>
                    </form>
                </div>
               
            </div>
        </div>
        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-xs-6">
                        <div class="copyright-content">
                            <p>2020 <i className="fa fa-copyright"></i><a href="#" target="_blank">Travel Experience</a></p>
                        </div>
                    </div>
                    <div class="col-xs-6">
                        <div class="payment-content">
                            <ul>
                                <li>We Accept</li>
                                <li>
                                    <img src={payment1} alt="Image"/>
                                </li>
                                <li>
                                    <img src={payment2} alt="Image"/>
                                </li>
                                <li>
                                    <img src={payment3} alt="Image"/>
                                </li>
                                <li>
                                    <img src={payment4} alt="Image"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </footer>

        </>
    )
}

export default Footer;