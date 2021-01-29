import React, { Component } from "react"
// import car from "../assets/car.css"
import cStyle from "../assets/style.css"
import plugIN from "../assets/plugin.css"
import ScriptTag from "react-script-tag"
import  "../components/js/preloader.js"
import Loader from "../components/Loader"
import Header from "../components/Header"
import {CardGroup, Card, Button} from 'react-bootstrap'
import Caro from "./Caro"
import deal from "./images/deal1.jpg";
import bucket from "./images/bucket1.jpg";
import partner1 from "./images/partner1.png";
import partner2 from "./images/partner2.png";
import partner3 from "./images/partner3.png";
import partner4 from "./images/partner6.png";
import partner5 from "./images/partner4.png";
import partner6 from "./images/partner5.png";
import insta4 from "./images/insta4.jpg";
import insta5 from "./images/insta5.jpg";
import insta6 from "./images/insta6.jpg";
import Footer from "./Footer"
import Clients from "./images/travel/our-clients.jpg"
import Awards from "./images/travel/awards.jpg"
import be1 from "./images/travel/be.jpg"
import be2 from "./images/travel/be2.jpg"
import be3 from "./images/travel/be3.jpg"
import be4 from "./images/travel/be4.jpg"
import jo from "./images/travel/jo.jpg"
import cot from "./images/travel/cot.jpg"
import accra from "./images/travel/accra.jpg"
import mada from "./images/travel/mada.jpg"
import egy from "./images/travel/egy.jpg"
import res from "./images/travel/res.jpg"

// var React = require('react');
var ReactDOM = require('react-dom');
var Barcode = require('react-barcode');


class Home extends Component{
    state = {
        load: true
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
            


    {/* <meta charset="UTF-8"/> */}
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <title> Yatra - Travel Agency HTML Template</title>
  
    <link rel="shortcut icon" type="image/x-icon" href="images/logo1.png"/>
  
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    
    <link href={cStyle} rel="stylesheet" type="text/css"/>
   
    <link href="" rel="stylesheet" type="text/css"/> 

    <link href={plugIN} rel="stylesheet" type="text/css"/>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>



     {/* <div id="preloader">
     
     <div id="status"></div>
 </div> */}

  


<Barcode value="http://github.com/kciter" />,
  mountNode
   
 
 
            </>
        )
    }
}

export default Home;