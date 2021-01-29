import React, { Component } from "react"
import cStyle from "../assets/style.css"
import plugIN from "../assets/plugin.css"
import ScriptTag from "react-script-tag"
import  "../components/js/preloader.js"
import Header from "./Header"
import Footer from "./Footer"
import Loader from "../components/Loader"
import teamPic from "./images/travel/meet-the-team.jpg"
import mySlide3 from "./images/travel/slide3.jpg"
import OurVision from "./images/travel/our-vision.jpg"
import Value from "./images/travel/value-prop.jpg"




class AboutUs extends Component {

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
                <h2>About Us</h2>
                <nav aria-label="breadcrumb">
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">About Us</li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="section-overlay"></div>
    </section>

    {/* <section class="aboutus">
        <div class="container">
          
            <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="about-item">
                        <div class="about-icon">
                            <i class="fa fa-superpowers" aria-hidden="true"></i>
                        </div>
                        <div class="about-content">
                            <h3>Our Vision</h3>
                            <p>To create experiences that leave you speechless, which in turn makes you a storyteller.
</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="about-item">
                        <div class="about-icon">
                            <i class="fa fa-paw" aria-hidden="true"></i>
                        </div>
                        <div class="about-content">
                            <h3>Our Mission</h3>
                            <p>To be a Leading Online Travel Agency, Tour Operator & Logistic Company in the World</p>
                        </div>
                    </div>
                </div>
             
            </div>
        </div>
    </section> */}

<section class="aboutus">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title text-center">
                        <h2>Why Choose Us?</h2>
                        <div class="section-icon section-icon-white">
                            <i class="flaticon-diamond"></i>
                        </div>       
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="about-item">
                        <div class="about-icon">
                            <i class="fa fa-superpowers" aria-hidden="true"></i>
                        </div>
                        <div class="about-content">
                            <h3>Perfect Planning</h3>
                            <p>Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers!</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="about-item">
                        <div class="about-icon">
                            <i class="fa fa-paw" aria-hidden="true"></i>
                        </div>
                        <div class="about-content">
                            <h3>Secure Venues</h3>
                            <p>We work hard to secure the best hotel rates in the most popular destinations. Search and book adventure tours now!</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="about-item">
                        <div class="about-icon">
                            <i class="fa fa-fire" aria-hidden="true"></i>
                        </div>
                        <div class="about-content">
                            <h3>Beautiful Memories</h3>
                            <p>Book international vacation packages with us and create memories that will last a lifetime! Create History !</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section class="our-team">

<div class="container">
  
  
<img src={OurVision}/>
   
     
   
</div>
</section>

    <section class="our-team">

        <div class="container">
          
       
        <img src={mySlide3}/>
           
             
          
        </div>
    </section>









  
   
    <section class="our-team">
        <div class="container">

<img src={teamPic}/>
            
        </div>
    </section>

   

    <section class="our-team">

<div class="container">
  
   
<img src={Value}/>
   
     
 
</div>
</section>
 <Footer/>

   
   
 








            </>
        )
    }
}

export default AboutUs;