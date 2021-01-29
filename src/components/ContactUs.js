import React, { Component } from "react"
import cStyle from "../assets/style.css"
import plugIN from "../assets/plugin.css"
import ScriptTag from "react-script-tag"
import  "../components/js/preloader.js"
import Header from "./Header"
import Footer from "./Footer"
import Loader from "../components/Loader"



class ContactUs extends Component {

    state ={
        load:true
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                load:false
            })
        },3000)
  
}


    render(){
        return(
            <>
                    {!this.state.load ? 
         <Header/>: null   
        }

                       
{this.state.load ? 
    <Loader/> : null

}  

<meta name="viewport" content="width=device-width, initial-scale=1"/>

<title> Yatra - Travel Agency HTML Template</title>

<link rel="shortcut icon" type="image/x-icon" href="images/logo1.png"/>

<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>

<link href={cStyle} rel="stylesheet" type="text/css"/>

<link href="" rel="stylesheet" type="text/css"/> 

<link href={plugIN} rel="stylesheet" type="text/css"/>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
 

{/* <div id="preloader">
     <Loader/>
     <div id="status"></div>
 </div> */}
    
 <section class="breadcrumb-outer text-center">
        <div class="container">
            <div class="breadcrumb-content">
                <h2>Contact Us Page</h2>
                <nav aria-label="breadcrumb">
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Destinations</a></li>
                        <li class="breadcrumb-item"><a href="#">Bahamas Cruises</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Booking</li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="section-overlay"></div>
    </section>



    <section class="contact">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div id="contact-form" class="contact-form">

                        <div id="contactform-error-msg"></div>

                        <form method="post" action="#" name="contactform" id="contactform">
                            <div class="row">
                                <div class="form-group col-12">
                                    <label>Name:</label>
                                    <input type="text" name="full_name" class="form-control" id="Name" placeholder="Enter full name" required/>
                                </div>
                                <div class="form-group col-6">
                                    <label>Email:</label>
                                    <input type="email" name="email" class="form-control" id="email" placeholder="abc@xyz.com" required/>
                                </div>
                                <div class="form-group col-6 col-left-padding">
                                    <label>Phone Number:</label>
                                    <input type="text" name="phone" class="form-control" id="phnumber" placeholder="XXXX-XXXXXX" required/>
                                </div>
                                <div class="textarea col-12">
                                    <label>Message:</label>
                                    <textarea name="comments" placeholder="Enter a message" required></textarea>
                                </div>
                                <div class="col-12">
                                    <div class="comment-btn">
                                         <input type="submit" class="btn-blue btn-red" id="submit" value="Send Message"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="contact-about footer-margin">
                        <div class="about-logo">
                            {/* <img src="images/Yatra-01.png" alt="Image"/> */}
                        </div>
                        <h4>Travel With Us</h4>
                        <p>Your satisfaction is guranteed with us</p>
                        <div class="contact-location">
                            <ul>
                                <li><i class="flaticon-maps-and-flags" aria-hidden="true"></i> Location</li>
                                <li><i class="flaticon-phone-call"></i> (012)-345-6789</li>                                        
                                <li><i class="flaticon-mail"></i> travelexperience@mail.com</li>
                            </ul>
                        </div>
                        <div class="footer-social-links">
                            <ul>
                                <li class="social-icon"><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li class="social-icon"><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li class="social-icon"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li class="social-icon"><a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                                <li class="social-icon"><a href="#"><i class="fa fa-google" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <div class="map">
        <div id="map" style={{height: "350px; width: 100%"}}></div>
    </div>
  
    


 <Footer/>

   
   
 








            </>
        )
    }
}

export default ContactUs;