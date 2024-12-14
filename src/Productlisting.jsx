import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Products from './Products';

function Productlisting() {
  const [Pitems , setPitems]=useState([]);
 useEffect(()=>{
  axios.get('https://fakestoreapi.com/products')
.then(res=>{
  setPitems(res.data)
  console.log( Pitems)
}).catch(err=>{
  console.log(`error + :${err}`)
})
 },[] )

useEffect(()=>{
  if(Pitems){
    console.log( "product from Pitems " , Pitems)
  }
},[Pitems])

  return (
    <>
     {Pitems ? <Products product={Pitems} /> : <p>Loading...</p>}
    
    </>
  )

  
}

export default Productlisting