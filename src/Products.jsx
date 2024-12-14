import { useState } from 'react'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";




function Products({product}) {
 
  console.log(product);
  return (
    <>
    <h1>Products</h1>
    <Container>
      <Row>
        
        {
        product.map((products)=>(
          <Col key={products.id}  xs={6} md={4}>
          <img className='w-100' key={products.id} src={products.image} alt="" />
          <p >{products.title}</p>
          <p >{products.price}</p>
          
          <Link to={`/ProductDetails/${products.id}`}>
          <button  className=' btn btn-primary'>Click for details</button>
          </Link>
          </Col>
        ))
      }
    </Row>
   </Container>
   
    </>
  )
}

export default Products
