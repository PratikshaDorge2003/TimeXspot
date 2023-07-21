import React from 'react'
import Articles from './Articles';
import { Navigate, useNavigate } from 'react-router';

function ProductHub(props) {
    let { title, src, url ,details,type } = props;
    const navigate = useNavigate();

    const func = () => {
       navigate("/"+ type+"/" + title);
    };
    
  return (
    <>
    <div className='productHub' >
         <div><img className='image' alt='' src={src?src:"https://m.media-amazon.com/images/I/71sgtpB-rxL.jpg"} /></div> 
         <div className='item'><h4>{title}</h4></div>
         <div className='item'><p>{details.slice(0,60)+"..."}</p></div>
        
        <button className='btn' onClick={func}>Read More</button>
        
    </div>

</>

  )
}

export default ProductHub