import React, { Component } from "react"
import cStyle from "../assets/style.css"
import plugIN from "../assets/plugin.css"
import ScriptTag from "react-script-tag"
import  "../components/js/preloader.js"
import Header from "./Header"
import Footer from "./Footer"
import Loader from "../components/Loader"



class Login_Register extends Component {
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
                <h2>Login/Register Page</h2>
                <nav aria-label="breadcrumb">
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a style={{color:"black"}}>Home</a></li>
                        <li class="breadcrumb-item"><a style={{color:"black"}}>Shop</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Login/Register Page</li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="section-overlay"></div>
    </section>


    <section class="login">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="login-form">
                        <form>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-title">
                                        <h2>Login</h2>
                                        <p>Register if you don't have an account.</p>
                                    </div>
                                </div>
                                <div class="form-group col-12">
                                    <label>Username</label>
                                    <input type="email" class="form-control" id="Name1" placeholder="Enter username or email id"/>
                                </div>
                                <div class="form-group col-12">
                                    <label>Password</label>
                                    <input type="password" class="form-control" id="email1" placeholder="Enter correct password"/>
                                </div>
                                <div class="col-12">
                                    <div class="checkbox-outer">
                                        <input type="checkbox" name="vehicle2" value="Car"/> Remember Me?
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="comment-btn">
                                        <a style={{color:"white"}} class="btn-blue btn-red">Login</a>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="login-accounts">
                                        <a href="forgot-password.html" class="forgotpw">Forgot Password?</a>
                                        <h3>Login using</h3>
                                        <div class="login-accounts-btn">
                                            <a class="btn-blue" style={{color:"white"}}><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a>
                                            <a class="btn-blue btn-google" style={{color:"white"}}><i class="fa fa-google" aria-hidden="true"></i> Google</a>                              
                                            <a class="btn-blue btn-twit" style={{color:"white"}}><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="login-form">
                        <form>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-title">
                                        <h2>Register</h2>
                                        <p>Enter your details to be a member.</p>
                                    </div>
                                </div>
                                <div class="form-group col-12">
                                    <label>Name:</label>
                                    <input type="text" class="form-control" id="Name" placeholder="Enter full name"/>
                                </div>
                                <div class="form-group col-12">
                                    <label>Email:</label>
                                    <input type="email" class="form-control" id="email" placeholder="abc@xyz.com"/>
                                </div>
                                <div class="form-group col-12">
                                    <label>Phone Number:</label>
                                    <input type="text" class="form-control" id="date1" placeholder="Select Date"/>
                                </div>
                                <div class="form-group col-6">
                                    <label>Select Password :</label>
                                    <input type="password" class="form-control" id="date" placeholder="Enter Password"/>
                                </div>
                                <div class="form-group col-6 col-left-padding">
                                    <label>Confirm Password :</label>
                                    <input type="password" class="form-control" id="phnumber" placeholder="Re-enter Password"/>
                                </div>
                                <div class="col-xs-12">
                                    <div class="checkbox-outer">
                                        <input type="checkbox" name="vehicle2" value="Car"/> I agree to the <a style={{color:"white"}}>terms and conditions.</a>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="comment-btn">
                                        <a style={{color:"white"}} class="btn-blue btn-red">Register Now</a>
                                    </div>
                                </div>
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

export default Login_Register;