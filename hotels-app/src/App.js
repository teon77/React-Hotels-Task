import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import HotelPage from './components/HotelPage';
import HotelsGallery from './components/HotelsGallery';
import Footer from "./components/Footer";


class App extends React.Component {
  
  render() {
    return (
      <div>
      
      <Router>
      
        <div>
        <Routes>
            <Route exect path="/" element={<HotelsGallery hotels={data}/>} /> 
            
              {/* creates the hotels pages */}
            {data.map((hotelDataObject, index) => ( 
              <Route key={index} exact path={`${encodeURIComponent(hotelDataObject.hotelName)}`} element={<HotelPage 
                hotelName={hotelDataObject.hotelName}
                streetName={hotelDataObject.streetName}
                houseNumber={hotelDataObject.houseNumber}
                phoneNumber={hotelDataObject.phoneNumber}
                imageSrc={hotelDataObject.imageSrc}
              />}/>
            ))}
          </Routes>
            <Footer /> {/* serving Footer here so it will be displayed on all pages */}
        </div>
      </Router>

      </div>
    )
  }
}


const data = [
  {
    hotelName: "מלון מרום",
    streetName: "פלמח",
    houseNumber: "051",
    phoneNumber: 825,
    imageSrc:"https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768"
  },
  {
    hotelName: "אלישע בעמ",
    streetName: "כץ יאיר",
    houseNumber: "012",
    phoneNumber: 8309009,
    imageSrc:"https://www.hotels.co.il/images_en/david_dead_sea.jpg"
  },
  {
    hotelName: "אירוח הר הכרמל",
    streetName: "דרך הים",
    houseNumber: 103,
    phoneNumber: 8381414,
    imageSrc:"https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/10/29/102962_v6.jpeg"
  },
  {
    hotelName: "מלון הר הכרמל",
    streetName: "שושנת הכרמל",
    houseNumber: "067",
    phoneNumber: 8381414,
    imageSrc:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/96/95/96959_v6.jpeg"
  },
  {
    hotelName: "קראון פלזה חיפה",
    streetName: "יפה נוף",
    houseNumber: 111,
    phoneNumber: 8350800,
    imageSrc:"https://media.timbu.com/img/h1406997/400/280/b1/%D7%9E%D7%9C%D7%95%D7%9F-%D7%A7%D7%93%D7%9D-kedem-hotel-1406997-1.jpg"
  },
  {
    hotelName: "מלון דביר",
    streetName: "יפה נוף",
    houseNumber: 124,
    phoneNumber: 8389139,
    imageSrc:"https://media-cdn.tripadvisor.com/media/photo-s/1a/bc/da/6e/anatole-hotel-hanoi.jpg"
  },
  {
    hotelName: "מלון נוף",
    streetName: "שדרות הנשיא",
    houseNumber: 101,
    phoneNumber: 8354311,
    imageSrc:"https://pix10.agoda.net/hotelImages/5603090/-1/80f12a5e226be49b5f2d41f51c67572d.jpg?s=1024x768"
  },
  {
    hotelName: "מלון דן פנורמה",
    streetName: "שדרות הנשיא",
    houseNumber: 105,
    phoneNumber: 8334510,
    imageSrc:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/240942383.jpg?k=5e0f0785efb41aab3f4146661cfaffbf9dc033faee2f521b6a48a9452f25c6b0&o=&hp=1"
  },
  {
    hotelName: "בית שלום כרמל",
    streetName: "שדרות הנשיא",
    houseNumber: 110,
    phoneNumber: 8377481,
    imageSrc:"https://herbertsamuel.com/wp-content/uploads/elementor/thumbs/d071-scaled-orojmnpwc2cx72xp8uep24dforixsnlf7yrjn8gxxs.jpg"
  },
  {
    hotelName: "מלון יערות הכרמל",
    streetName: "יערות הכרמל",
    houseNumber: 31900,
    phoneNumber: "‎1809442791",
    imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSReGW6Cao3a6mYWMrFhU6Lnvu1Dlohs5zl5w&usqp=CAU"
  },
  {
    hotelName: "מלון וילה כרמל",
    streetName: "היינריך היינה",
    houseNumber: 1,
    phoneNumber: "8375777/8",
    imageSrc:"https://www.hagoshrim-hotel.co.il/octopus/upload/images/pages/hzytt-mlvnn-640.328.jpg"
  },
  {
    hotelName: "מלון גלרי חיפה",
    streetName: "הרצל",
    houseNumber: "061",
    phoneNumber: 8616161,
    imageSrc:"https://cdn2.portal.tambourine.com/thesetaihotels/application/files/7715/3827/8346/php-mh-tel-aviv_hotel_front.jpg"
  },
  {
    hotelName: "מלון ליאונרדו",
    streetName: "דוד אלעזר",
    houseNumber: 10,
    phoneNumber: 8508888,
    imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw25YwHFLOFfuems2ppiMUEr1k0083K9D_1g&usqp=CAU"
  }
]

export default App;
