import React from "react";
import { Link } from "react-router-dom";
import HotelCard from "./HotelCard";
import Header from "./Header";
class HotelsGallery extends React.Component {
 

  render() {
    
    return (
      <div>   {/* creates the list of hotels in the main Page */}
      <Header />  {/* serving header here so it will be displayed only in this page*/}
      <ul className="hotels-list-container">
        {this.props.hotels.map((hotelDataObject, index) => (
          <li key={index} className="hotel-list-item">
            <Link to={"/" + encodeURIComponent(hotelDataObject.hotelName)}>
             <HotelCard hotelName={hotelDataObject.hotelName} imageSrc={hotelDataObject.imageSrc} />
            </Link> 
          </li>
        ))}
      </ul>
      </div>
    )
  }
}

export default HotelsGallery;