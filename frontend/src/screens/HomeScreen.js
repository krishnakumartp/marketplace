import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import axios from 'axios';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';

export default function  HomeScreen() {

   const [proudcts, setProudcts] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   useEffect(()=>{
      const fetchData = async()=>{
         try{

         setLoading(true);
         const {data} = await axios.get('/api/products');
         setLoading(false);
         setProudcts(data);

         }
         catch(err)
         {
            setError(err.message);
            setLoading(false);

         }
         
      };
      fetchData();

   },[]);

   console.log(proudcts.length);
   return( 
      <div>
         {loading ? (
            <LoadingBox></LoadingBox>
         ) : error ? (
            <MessageBox variant="danger"> {error.message}</MessageBox>

         ) :
         (  <div className="row center">
         { proudcts.map((product)=>(
         <Product key={product.id} product={product}></Product>
         ))}
         </div>)
         }
         </div>
    
      );
   } 

