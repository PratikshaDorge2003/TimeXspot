import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Gdata from "../guitar.json";
import Sdata from "../strings.json";
import Pdata from "../stuff.json";
import { Link } from 'react-router-dom';


function Articles() {
 
 
  
   const {itemType, itemName} = useParams(); 
   const [ele, setEle] = useState([]);
   const[img,setImg]=useState("");
   const[desc,setDesc]=useState("");
   const[price,setPrice]=useState("");
   const[details,setdetails]=useState("");

   
   const find = () => {

     ele.forEach((element) => {
       
        if(element.title === itemName){
           setImg(element.urlToImage);
           setDesc(element.description);
           setPrice(element.price);
           setdetails(element.details);
        }
     });
   }

   useEffect (() => {
    console.log(itemType);
         if(itemType==="guitars"){
            setEle(Gdata.articles);
            find();
         }
         if(itemType==="strings"){
            setEle(Sdata.articles);
            find();
         }

         if(itemType==="stuff"){
            setEle(Pdata.articles);
            find();
         }
    
    }, [itemType, setEle, find]); 
    
    
  return (
    <div className=' blog'>
        <div><img className='image2' src={img}></img></div>
        <div><h1 className='heading'>{itemName}</h1></div>
        <div><h3 className='cost'>{price}</h3></div>
        <div><p className='desc'>{details}</p></div>
        <div><a href="https://www.flipkart.com" target="_blank" className='btn btn1'>BUY NOW </a></div>
    </div>

  )
}

export default Articles