import React from 'react'
import ProductHub from './ProductHub'
import Navbar from './Navbar'

function Product(props){
  return (
    <div>
        <Navbar/>
            <h3 className='centerized'>{props.title}</h3>
    
           <div className='product'>
               { props.ele.map((element,index) => {
                   return <div key={index}> <ProductHub title={element.title} src={element.urlToImage} url={element.url} details={element.details} type={element.type}/></div>
                   
               })}
           </div>

   </div>
  )
}

export default Product