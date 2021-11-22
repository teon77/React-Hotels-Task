import React from "react";


class HotelCard extends React.Component {
   
  
    render() {
      
      return (
        <div className="Hotel-Card">
            <img className="hotel-image" src={this.props.imageSrc} alt="" />
          <span>{this.props.hotelName}</span>
        </div>
      )
    }
  
  }
  
  export default HotelCard;