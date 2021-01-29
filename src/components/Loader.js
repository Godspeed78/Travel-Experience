import React, { Component } from "react"
import imageLoader from "../components/images/loader.gif"


class Loader extends Component {
    render(){
        return(
            <>
      <div className="jumbo-back">

          <div className="jumbotron jumbo">
            <div className="metro-spin">
                <img src={imageLoader} style={{width:"400px"}}/>
            </div>
          </div>
        </div>

            </>
        )
    }
}

export default Loader;