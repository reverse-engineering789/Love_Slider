import React from "react";
import './Card.css';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
// import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

const Card = (props) => {
    let review = props.review;
    return(
        <div className="MainCard">

           <div className="reviewImgDiv">
            <img className= "reviewImage" src={review.image}/>
            <div className="UnderCircle"></div>
           </div>


           {/* <div className="UnderCircle"></div> */}
           
           
           <div className="reviewNameDiv">
            <p className="reviewName">{review.name}</p>
            <p className="reviewJob">{review.job}</p>
           </div> 


           <div className="reviewJobDiv">
            {/* <p className="reviewJob">{review.job}</p> */}
           </div>
           

           <div className="QuoteLeft">
            <FaQuoteLeft/>
           </div>


           <div className="reviewText">
            {review.text}
           </div>

           
           <div className="QuoteRight">
            <FaQuoteRight/>
           </div>

           {/* <div className="slideButtonContainer">
            <button className="slideRight">
                <FiChevronRight/>
            </button>
            <button className="slideLeft">
                <FiChevronLeft/>
            </button>
           </div>
            
            <div className="Random_Gen_Div">
            <button className="Random_Gen"> Surprise me</button>
            </div> */}
        </div>
    )
}


export default Card;