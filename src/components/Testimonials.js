import React, { useState } from "react";
import Card from './Card';
import './Testimonials.css'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
// import reviews from "../data";

const Testimonials = (props) => {
    let reviews = props.reviews;

    const [index, setIndex] = useState(0);

    function leftShiftHandler(){
         if(index -1 < 0){
            setIndex(reviews.length-1);
         }else{
            setIndex(index-1);
         }
    }

    function rightShiftHandler(){
        if(index + 1 >= reviews.length){
            setIndex(0);
         }else{
            setIndex(index+1);
         }
    }

    function randomGenHandler(){
       const random = Math.floor(Math.random() * reviews.length);
       setIndex(random);
    }


    return(
        <div className="CardMainDIv">
            <Card review = {reviews[index]}></Card>

            <div className="slideButtonContainer">
            <button 
            onClick={leftShiftHandler}
            className="slideRight">
                <FiChevronRight/>
            </button>
            <button 
            onClick={rightShiftHandler}
            className="slideLeft">
                <FiChevronLeft/>
            </button>
           </div>
            
            <div className="Random_Gen_Div">
            <button 
            onClick={randomGenHandler}
            className="Random_Gen"> Surprise me</button>
            </div>
        </div>
    )
}


export default Testimonials;