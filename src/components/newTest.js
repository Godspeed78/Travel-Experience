import React, { Component } from "react"
import cStyle from "../assets/style.css"
import plugIN from "../assets/plugin.css"
import ScriptTag from "react-script-tag"
import  "../components/js/preloader.js"
import Header from "./Header"
import Footer from "./Footer"
import Loader from "../components/Loader"



class NewTest extends Component {
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

<link rel="shortcut icon" type="image/x-icon" href="images/logo1.png"/>
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link href="css/style.css" rel="stylesheet" type="text/css"/>
    <link href="font/flaticon.css" rel="stylesheet" type="text/css"/>
    <link href="css/plugin.css" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
 

{/* <div id="preloader">
     <Loader/>
     <div id="status"></div>
 </div> */}
    


    <section id="home_banner_new">
    	<div class="row banner-slider slider-button">
                <div class="col-md-12">
                    <div class="sale-item box-item">
                        <div class="sale-image">
                            <img src="images/sale1.jpg" alt="Image"/>
                        </div>
                        <div class="sale-content-1 sale-content">
                            <div class="sale-review">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                            <h3><a href="#">America – Grand canyon, Golden Gate</a></h3>
                            <div class="popular-price">
                        		<span>From 2,800 <i>$3,200</i></span>
                        	</div>
                        </div>
                        <div class="sale-overlay"></div>
                    </div>
                </div>
               
              
                <div class="col-md-12">
                    <div class="sale-item box-item">
                        <div class="sale-image">
                            <img src="images/sale4.jpg" alt="Image"/>
                        </div>
                        <div class="sale-content-1 sale-content">
                            <div class="sale-review">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                            <h3><a href="#">Venice, Rome and Milan – 7D/6N</a></h3>
                            <div class="popular-price">
                        		<span>From $1,500 <i>$1,800</i></span>
                        	</div>
                        </div>
                        <div class="sale-overlay"></div>
                    </div>
                </div>
        </div>
    </section>

    <section id="mt_services">
    	<div class="container">

    		<div class="search-content-slider">
    			<div class="section-title text-center">
	                <h2>Search Your Best Tours</h2>
	                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	            </div>
                <form>
                    <div class="row">
                        <div class="col-md-3 col-xs-6">
                            <div class="table_item">
                                <div class="form-group">
                                    <select name="custom-select-1" class="selectpicker form-control" tabindex="1">
                                        <option value="0">Destination</option>
                                        <option value="1">0</option>
                                        <option value="2">1</option>
                                        <option value="3">2</option>
                                        <option value="4">3</option>
                                        <option value="5">4</option>
                                    </select>
                                    <i class="flaticon-maps-and-flags"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="table_item">
                                <div class="form-group">
                                    <select name="custom-select-2" class="selectpicker form-control" tabindex="1">
                                        <option value="0">Type</option>
                                        <option value="1">0</option>
                                        <option value="2">1</option>
                                        <option value="3">2</option>
                                        <option value="4">3</option>
                                        <option value="5">4</option>
                                    </select>
                                    <i class="flaticon-box"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="table_item">
                                <div class="form-group">
                                    <div class='input-group date' id='datetimepicker1'>
                                        <input type='text' class="form-control" value="dd-mm-yyyy" />
                                        <i class="flaticon-calendar"></i>
                                        <span class="input-group-addon">
                                            <i class="fa fa-calendar" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6">
                            <div class="table_item">
                                <div class="search">
                                    <a href="#" class="btn-blue btn-red btn-style-1">SEARCH</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form> 
            </div>

    		<div class="services-main">
    			<div class="row">
    				<div class="col-md-4 col-sm-12">
    					<div class="services-box"> 
    						<a href="#">
    							<div class="box text-center">
    								<div class="icon active"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
    								<h3>Beautiful Places</h3>
    								<p>Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna.</p>
    							</div> 
    						</a>
    					</div>
    				</div>

    				<div class="col-md-4 col-sm-6 col-xs-12">
    					<div class="services-box"> 
    						<a href="#">
    							<div class="box text-center">
    								<div class="icon"> <i class="fa fa-building" aria-hidden="true"></i></div>
    								<h3>Diverse Destinations</h3>
    								<p>Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna.</p>
    							</div> 
    						</a>
    					</div>
    				</div>

    				<div class="col-md-4 col-sm-6 col-xs-12">
    					<div class="services-box"> 
    						<a href="#">
    							<div class="box text-center">
    								<div class="icon"> <i class="fa fa-briefcase" aria-hidden="true"></i></div>
    								<h3>Value for Maney</h3>
    								<p>Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna.</p>
    							</div> 
    						</a>
    					</div>
    				</div>
    			</div>
    		</div>
    		
    	</div>
    </section>
  
    <section class="top-destinations-1">
        <div class="container">
            <div class="section-title text-center">
                <h2>Trending Activities</h2>
                <a href="">View all trending <i class="fa fa-long-arrow-right"></i></a>
                <div class="back-title"><h3>Trending</h3></div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-12">
                    <div class="destination-item-1 box-item">
                        <div class="destination-image-1">
                            <img src="images/destination-fw1.jpg" alt="Image"/>
                        </div>
                        <div class="destination-content-1">
                            <h3><a href="tour-detail.html">5-Day Oahu Tour: Honolulu, Pearl Harbor</a></h3>
                            <p class="package-days1"><i class="flaticon-time"></i> 5 days</p>
                            <div class="deal-rating">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star-o"></span>
                                <span class="fa fa-star-o"></span>
                            </div>
                        	<div class="tour-price">
                        		<span class="tour-head">From</span>
                        		<span class="tour-tail">$1,500</span>
                        	</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-6">
                    <div class="destination-item-1 box-item">
                        <div class="destination-image-1">
                            <img src="images/destination-fw2.jpg" alt="Image"/>
                        </div>
                        <div class="destination-content-1">
                            <h3><a href="tour-detail.html">Molokini and Turtle Arches Snorkeling Trip</a></h3>
                            <p class="package-days1"><i class="flaticon-time"></i> 2 days</p>
                            <div class="deal-rating">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star-o"></span>
                                <span class="fa fa-star-o"></span>
                            </div>
                        	<div class="tour-price">
                        		<span class="tour-head">From</span>
                        		<span class="tour-tail">$500</span>
                        	</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-6">
                    <div class="destination-item-1 box-item">
                        <div class="destination-image-1">
                            <img src="images/destination-fw3.jpg" alt="Image"/>
                            <div class="thumbnail-ribbon">
                            	<span>Best Seller</span>
                            </div>
                        </div>
                        <div class="destination-content-1">
                            <h3><a href="tour-detail.html">Turkey Tour: A Cultural & Historical Journey</a></h3>
                            <p class="package-days1"><i class="flaticon-time"></i> 2 days</p>
                            <div class="deal-rating">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star-o"></span>
                                <span class="fa fa-star-o"></span>
                            </div>
                        	<div class="tour-price">
                        		<span class="tour-head">From</span>
                        		<span class="tour-tail">$2,500</span>
                        	</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
 
    <section class="full-tours">
    	<div class="container">
    		<div class="section-title text-center">
	            <h2>Destination Featured</h2>
	            <a href="">View all destination <i class="fa fa-long-arrow-right"></i></a>
	            <div class="back-title"><h3>Destination</h3></div>
	        </div>
	    </div>
        <div class="row">
            <div class="col-md-6 col-sm-12">
                <div class="ft-item">
                    <div class="ft-image">
                        <img src="images/ft1.jpg" alt="Image"/>
                        <div class="ft-overlay"></div>
                    </div>
                    <div class="ft-content">
                        <h2><a href="#">Hot Air Ballooning</a></h2>
                        <p>Starting from <span>$ 325</span></p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-6">
                <div class="ft-item">
                    <div class="ft-image">
                        <img src="images/ft2.jpg" alt="Image"/>
                        <div class="ft-overlay"></div>
                    </div>
                    <div class="ft-content">
                        <h2><a href="#">Surfing at Goa</a></h2>
                        <p>Starting from <span>$ 325</span></p>
                    </div>
                </div>
                <div class="ft-item">
                    <div class="ft-image">
                        <img src="images/ft3.jpg" alt="Image"/>
                        <div class="ft-overlay"></div>
                    </div>
                    <div class="ft-content">
                        <h2><a href="#">Sailing Thailand</a></h2>
                        <p>Starting from <span>$ 325</span></p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-6">
                <div class="ft-item">
                    <div class="ft-image">
                        <img src="images/ft4.jpg" alt="Image"/>
                        <div class="ft-overlay"></div>
                    </div>
                    <div class="ft-content">
                        <h2><a href="#">Lake Tohoe Adventure</a></h2>
                        <p>Starting from <span>$ 325</span></p>
                    </div>
                </div>
                <div class="ft-item">
                    <div class="ft-image">
                        <img src="images/ft5.jpg" alt="Image"/>
                        <div class="ft-overlay"></div>
                    </div>
                    <div class="ft-content">
                        <h2><a href="#">Dancing in Bali</a></h2>
                        <p>Starting from <span>$ 325</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
 
    <section class="amazing-tours">
        <div class="container">
            <div class="section-title text-center">
                <h2>Popular Tours</h2>
                <a href="">View all Popular Tours <i class="fa fa-long-arrow-right"></i></a>
                <div class="back-title"><h3>Popular</h3></div>
            </div>
            <div class="row">
                <div class="col-md-4 col-xs-6">
                    <div class="at-item">
                        <div class="at-image">
                            <img src="images/detailslider1.jpg" alt="Image"/>
                            <div class="at-overlay"></div>
                        </div>
                        <div class="at-content">
                        	<div class="popular-price">
                        		<span>From $2,500</span>
                        	</div>
                            <h3><a href="#">Cuba Sailing Advantures</a></h3>
                            <div class="deal-rating">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star-o"></span>
                                <span class="fa fa-star-o"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-xs-6">
                    <div class="at-item">
                        <div class="at-image">
                            <img src="images/detailslider2.jpg" alt="Image"/>
                            <div class="at-overlay"></div>
                        </div>
                        <div class="at-content">
                            <div class="popular-price">
                        		<span>From $2,500</span>
                        	</div>
                            <h3><a href="#">Treasures to Thailand</a></h3>
                            <div class="deal-rating">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star-o"></span>
                                <span class="fa fa-star-o"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-xs-6">
                    <div class="at-item">
                        <div class="at-image">
                            <img src="images/detailslider3.jpg" alt="Image"/>
                            <div class="at-overlay"></div>
                        </div>
                        <div class="at-content">
                            <div class="popular-price">
                        		<span>From $2,500</span>
                        	</div>
                            <h3><a href="#">Trip to the New York</a></h3>
                            <div class="deal-rating">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star-o"></span>
                                <span class="fa fa-star-o"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-xs-6">
                    <div class="at-item">
                        <div class="at-image">
                            <img src="images/sale3.jpg" alt="Image"/>
                            <div class="at-overlay"></div>
                        </div>
                        <div class="at-content">
                        	<div class="popular-price">
                        		<span>From $2,500</span>
                        	</div>
                            <h3><a href="#">Cuba Sailing Advantures</a></h3>
                            <div class="deal-rating">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star-o"></span>
                                <span class="fa fa-star-o"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-xs-6">
                    <div class="at-item">
                        <div class="at-image">
                            <img src="images/sale2.jpg" alt="Image"/>
                            <div class="at-overlay"></div>
                        </div>
                        <div class="at-content">
                            <div class="popular-price">
                        		<span>From $2,500</span>
                        	</div>
                            <h3><a href="#">Treasures to Thailand</a></h3>
                            <div class="deal-rating">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star-o"></span>
                                <span class="fa fa-star-o"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-xs-6">
                    <div class="at-item">
                        <div class="at-image">
                            <img src="images/sale1.jpg" alt="Image"/>
                            <div class="at-overlay"></div>
                        </div>
                        <div class="at-content">
                            <div class="popular-price">
                        		<span>From $2,500</span>
                        	</div>
                            <h3><a href="#">Trip to the New York</a></h3>
                            <div class="deal-rating">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star-o"></span>
                                <span class="fa fa-star-o"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="tour-cta">
    	<div class="container">
    		<div class="tour-cta-main">
    			<div class="row">
	    			<div class="col-sm-6">
	    				<div class="cta-content text-center">
	    					<h3>IT’S A BIG WORLD OUT THERE</h3>
	    					<h2>GO EXPLOORE</h2>
	    					<p>There are many variations of passages of. Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look.</p>
	    					<a href="#" class="btn-blue btn-style-1">Grab it!</a>
	    				</div>
	    			</div>
	    			<div class="col-sm-6">
	    				<div class="video-content">
	    					<div class="video-thumbnail">
	    						<img src="images/grid2.jpg" alt=""/>
	    						<div class="pulses">
				                    <button type="button" class="play-btn js-video-button" data-video-id='152879427' data-channel="vimeo"><i class="fa fa-play"></i></button>
				                </div>
	    					</div>
	                    </div>
	    			</div>
	    		</div>
    		</div>
    	</div>
    </section>

 
    <section class="deals-on-sale">
        <div class="container">
            <div class="section-title text-center">
                <h2>Recommended Exploration</h2>
                <a href="">View all exploraton <i class="fa fa-long-arrow-right"></i></a>
                <div class="back-title"><h3>Exploration</h3></div>
            </div>
            <div class="row sale-slider slider-button">
                <div class="col-md-12">
                    <div class="sale-item box-item">
                        <div class="sale-image">
                            <img src="images/sale1.jpg" alt="Image"/>
                        </div>
                        <div class="sale-content-1 sale-content">
                            <div class="sale-review">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                            <h3><a href="#">The Vanice Experience</a></h3>
                            <div class="popular-price">
                        		<span>From $1,500</span>
                        	</div>
                        </div>
                        <div class="sale-tag">
                            <span class="new-price">Best Offer</span>
                        </div>
                        <div class="sale-overlay"></div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="sale-item box-item">
                        <div class="sale-image">
                            <img src="images/sale2.jpg" alt="Image"/>
                        </div>
                        <div class="sale-content-1 sale-content">
                            <div class="sale-review">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                            <h3><a href="#">Surfing at Bahamas</a></h3>
                            <div class="popular-price">
                        		<span>From $500</span>
                        	</div>
                        </div>
                        <div class="sale-overlay"></div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="sale-item box-item">
                        <div class="sale-image">
                            <img src="images/sale3.jpg" alt="Image"/>
                        </div>
                        <div class="sale-content-1 sale-content">
                            <div class="sale-review">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                            <h3><a href="#">Surfing at Bahamas</a></h3>
                            <div class="popular-price">
                        		<span>From $1,200</span>
                        	</div>
                        </div>
                        <div class="sale-tag">
                            <span class="new-price">Best Offer</span>
                        </div>
                        <div class="sale-overlay"></div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="sale-item box-item">
                        <div class="sale-image">
                            <img src="images/sale4.jpg" alt="Image"/>
                        </div>
                        <div class="sale-content-1 sale-content">
                            <div class="sale-review">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                            <h3><a href="#">Surfing at Bahamas</a></h3>
                            <div class="popular-price">
                        		<span>From $800</span>
                        	</div>
                        </div>
                        <div class="sale-overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <section class="testimonial-1">
        <div class="container">
        	<div class="section-title text-center">
                <h2>Customer Reviews</h2>
                <a href="">View all reviews <i class="fa fa-long-arrow-right"></i></a>
                <div class="back-title"><h3>Testimonial</h3></div>
            </div>
            <div class="row slider-testimonail">
                <div class="col-sm-4">
                    
                    <div class="testi-detail">
                        <img src="images/testemonial2.jpg" alt=""/>
                        <span class="white">Hr Manager Of Dabur</span>
                        <h3 class="white">Christopher Daniel</h3>
                        <p class="white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                    </div>
                </div>
                <div class="col-sm-4">
                    
                    <div class="testi-detail">
                        <img src="images/testemonial1.jpg" alt=""/>
                        <span class="white">Executive of Hiratte</span>
                        <h3 class="white">Johnson Nell</h3>
                        <p class="white">lIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                    </div>
                </div>
                <div class="col-sm-4">
                    
                    <div class="testi-detail">
                        <img src="images/testemonial3.jpg" alt=""/>
                        <span class="white">Chairman of Biscull</span>
                        <h3 class="white">Danail Chrish</h3>
                        <p class="white">lIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="testi-detail">
                        <img src="images/testemonial4.jpg" alt=""/>
                        <span class="white">Director of Dallas</span>
                        <h3 class="white">Supercot Melt</h3>
                        <p class="white">lIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="blog">
        <div class="container">
        	<div class="section-title text-center">
                <h2>Our Latest Blogs</h2>
                <a href="">View all blogs <i class="fa fa-long-arrow-right"></i></a>
                <div class="back-title"><h3>Blog & News</h3></div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-12">
                    <div class="blog-item">
                        <div class="blog-image">
                            <img src="images/bucket1.jpg" alt="Image"/>
                            <div class="blog-content">
	                        	<h3><a href="#" class="white">How to travel with paper map</a></h3>
	                        	<div class="blog-author">
	                                <div class="pull-left">
	                                    <p><a href="#" class="white"><i class="fa fa-user-o" aria-hidden="true"></i> Jack Richard</a></p>
	                                </div>
	                                <div class="pull-right blog-date-icon">
	                                    <p class="white"><i class="fa fa-eye" aria-hidden="true"></i> 24</p>
	                                    <p class="white"><i class="fa fa-heart" aria-hidden="true"></i> 5</p>
	                                    <p class="white"><i class="fa fa-comment-o" aria-hidden="true"></i> 0</p>
	                                </div>
	                            </div>
	                        </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-6">
                    <div class="blog-item">
                        <div class="blog-image">
                            <img src="images/bucket2.jpg" alt="Image"/>
                            <div class="blog-content">
	                        	<h3><a href="#" class="white">Pityful a rethoric question ran</a></h3>
	                        	<div class="blog-author">
	                                <div class="pull-left">
	                                    <p><a href="#" class="white"><i class="fa fa-user-o" aria-hidden="true"></i> Jack Richard</a></p>
	                                </div>
	                                <div class="pull-right blog-date-icon">
	                                    <p class="white"><i class="fa fa-eye" aria-hidden="true"></i> 24</p>
	                                    <p class="white"><i class="fa fa-heart" aria-hidden="true"></i> 5</p>
	                                    <p class="white"><i class="fa fa-comment-o" aria-hidden="true"></i> 0</p>
	                                </div>
	                            </div>
	                        </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-6">
                    <div class="blog-item">
                        <div class="blog-image">
                            <img src="images/bucket3.jpg" alt="Image"/>
                            <div class="blog-content">
	                        	<h3><a href="#" class="white">Change your place and get the fresh air</a></h3>
	                        	<div class="blog-author">
	                                <div class="pull-left">
	                                    <p><a href="#" class="white"><i class="fa fa-user-o" aria-hidden="true"></i> Jack Richard</a></p>
	                                </div>
	                                <div class="pull-right blog-date-icon">
	                                    <p class="white"><i class="fa fa-eye" aria-hidden="true"></i> 24</p>
	                                    <p class="white"><i class="fa fa-heart" aria-hidden="true"></i> 5</p>
	                                    <p class="white"><i class="fa fa-comment-o" aria-hidden="true"></i> 0</p>
	                                </div>
	                            </div>
	                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <section id="newsletter-main">
    	<div class="container">
    		<div class="row">
    			<div class="col-sm-6">
    				<div class="newsletter">
				        <div class="section-title">
				            <h2>Newsletter Signup</h2>
				            <p>Subscribe to our weekly newsletter to get updated on our latest deals</p>
				        </div>
				        <form>
				            <div class="form-group">
				                <input type="text" class="form-control" id="search"/>
				                <a href="#"><span class="search_btn"><i class="fa fa-paper-plane" aria-hidden="true"></i> Sign Up</span></a>
				            </div>
				        </form>
				    </div>
    			</div>
    		</div>
    	</div>
    </section>


<Footer/>

    
    <div id="back-to-top">
        <a style={{color:"white"}}></a>
    </div>

   
   
 








            </>
        )
    }
}

export default NewTest;