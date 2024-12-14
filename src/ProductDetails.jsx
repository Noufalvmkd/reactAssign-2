import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const [pdetails , setPdetails]=useState({})
  let { id } = useParams();

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
  .then(res=>{
    setPdetails(res.data)
    console.log( "pp", pdetails)
  }).catch(err=>{
    console.log(`error + :${err}`)
  })
   },[] )

  

  return (
   <>
   <h1>Product Details {id}</h1>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pdetails.image} />
      <Card.Body>
        <Card.Title>{pdetails.title}</Card.Title>
        <p>{pdetails.price}</p>
        
      </Card.Body>
    </Card>
   </>
  )
}

export default ProductDetails