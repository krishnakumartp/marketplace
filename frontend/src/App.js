import React from 'react';
import data from './data';
import Product from './components/Product';


class  App extends React.Component {
   
    render(){

        return (
            <div className="grid-container">
                <header className="row">
                    <div>
                        <a className="brand" href="/"> MarketPlace</a>
                    </div>
                    <div>
                        <a href="/cart">Cart</a>
                        <a href="/signin">Sign In</a>
                    </div>
                    
                </header>
        
                <main>

                    <div className="row center">
                      {
                        data.products.map((product)=>(
        
                          <Product key={product.id} product={product}></Product>
                           
                        ))
                      }
        
                          
                    </div>
                    
                </main>
                <footer className="row center">
                    All Rights Reserved.
        
                </footer>
            </div>
        );
        

    }
      
  
}

export default App;
