import React from 'react';
import Rating from './Rating';

class  Product extends  React.Component{



    render(){

        const {product} = this.props;

      return(
            <div key={product.id} className="card">
            <a href= {`/product/${product.id}`}>
             <img className="img medium" src={product.image}
              alt= {product.name} /> 
            </a>
            <div className="card-body">
                <a href= {`/product.${product.id}`}>
                    
                    <h2>{product.name}</h2>
                </a>
            <Rating rating = {product.rating} numReviews = {product.numReviews} />
            
                <div className="price">
                    ${product.price}
                </div>
            </div>
         </div>
    
        );

    } 
    
}
export default Product;


/*export default function Product(props){
    const {product} = props;
    console.log(product);
    
    return(
        
     <div key={product.id} className="card">
        <a href= {`/product.${product.id}`}>
         <img className="img medium" src={product.image}
          alt= {product.name} /> 
        </a>
        <div className="card-body">
            <a href= {`/product.${product.id}`}>
                
                <h2>{product.name}</h2>
            </a>
            <div className="rating">
                <span>
                    <i className="fa fa-star"> </i>
                </span>
                <span>
                    <i className="fa fa-star"> </i>
                </span>
                <span>
                    <i className="fa fa-star"> </i>
                </span>
                <span>
                    <i className="fa fa-star"> </i>
                </span>
                <span>
                    <i className="fa fa-star"> </i>
                </span>
            </div>
            <div className="price">
                ${product.price}
            </div>
        </div>
     </div>

    ) 

} */
