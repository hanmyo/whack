import React from 'react';
import {useParams} from 'react-router-dom';

export default function Product({product,onLike,onDislike,onNext}){
   const {id} =useParams();
    return (
      <div className ="Product">
        <h1>Product {id}</h1>

      </div>
    )
  }