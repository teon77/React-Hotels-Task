import React from "react";
import { Link } from "react-router-dom";
class HotelPage extends React.Component {
 

  render() {
    
    return (
      <div className="hotel-page"> {/* creates the hotel page */}
      <Link className="go-back" to={"/" }>&#8678; Home-Page </Link> 
        <h1 className="hotel-page-header"> {this.props.hotelName} </h1>
        <h2>{this.props.streetName + ", " + this.props.houseNumber}</h2>
        <h3>טלפון: {this.props.phoneNumber}</h3>
        <img className="hotel-image" src={this.props.imageSrc} alt="" />
      </div>
    )
  }

}

export default HotelPage;