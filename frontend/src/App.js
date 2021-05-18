import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {BrowserRouter, Route} from 'react-router-dom'

class  App extends React.Component {
    render(){

        return (
 
         <BrowserRouter> 

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
                    <Route path="/" component={HomeScreen} exact ></Route>
                   <Route path="/product/:id" component={ProductScreen} ></Route>
                       
                    </main>

                    <footer className="row center">
                        All Rights Reserved.
            
                    </footer>
                </div>
            </BrowserRouter>
        );

    }
}

export default App;
