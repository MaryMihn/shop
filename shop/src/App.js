import React from 'react';
import Header from './header/Header'
import ShowProduct from './ShowProduct'
import Basket from './Basket/Basket'
import './App.css';

import Lime from './picture/lime.jpg'
import Kumquat from './picture/kumquat.jpg'
import Lemon from './picture/lemon.jpg'
import Mandarin from './picture/mandarin.jpg'
import Limquat from './picture/limquat.jpg'
import Grapefruit from './picture/grapefruit.jpg'



class App extends React.Component {
      constructor(props){
        super(props);
        this.state = {
          products: [
            { id: 1, count: 0, name: 'Lemon', price: 700, src: Lemon },
            { id: 2, count: 0, name: 'Kumquat', price: 800, src: Kumquat },
            { id: 3, count: 0, name: 'Mandarin', price: 695, src: Mandarin },
            { id: 4, count: 0, name: 'Lime', price: 588, src: Lime },
            { id: 5, count: 0, name: 'Limquat', price: 945, src: Limquat },
            { id: 6, count: 0, name: 'Grapefruit', price: 1020, src: Grapefruit },
          ],
          basket: []
        }
      }

      addProduct = (id) =>{
        let choosenProduct = this.state.products.find((product)=> product.id === id)
        let addChoosenProduct = this.state.basket.find((product)=> product.id === choosenProduct.id)
          if(addChoosenProduct === undefined){
            choosenProduct.count++
            this.state.basket.push(choosenProduct)
            this.setState({basket:this.state.basket})
          }
          else{
            addChoosenProduct.count++
            this.setState({basket:this.state.basket})
          }}

      removeProduct = (id) =>{
        let deliteProduct = this.state.products.find((product)=> product.id === id)
        let index = this.state.basket.indexOf(deliteProduct)
        this.state.basket.splice(index, 1);
        this.setState({basket: this.state.basket});
      }

      minusProduct = (id) =>{
        let  minusProduct = this.state.basket.find((product)=> product.id ===id)
        if(minusProduct.count > 1){
          minusProduct.count--
          this.setState({basket:this.state.basket})
        }
        else{
          this.removeProduct()
        }
    }

      plusProduct = (id) =>{
        let plusProduct = this.state.basket.find((product)=> product.id ===id)
        plusProduct.count++
        this.setState({basket:this.state.basket})
      }

      getPrice = () => {
        return this.state.basket.reduce((sum, product) => sum + product.price*product.count, 0);
    };

  render(){
    const products =this.state.products.map((product) =>{
      return <ShowProduct
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        src={product.src}
        addProduct={this.addProduct}
      />;
    })

  return (
    <div>
      <Header/>
      <div className ="goods">
        <div className="Products" id="Products">
          {products}
        </div>
          <Basket 
            basket={this.state.basket}
            removeProduct={this.removeProduct}
            minusProduct= {this.minusProduct}
            plusProduct={this.plusProduct}
            getPrice={this.getPrice}
          />
        </div>
        
        
        <div className="want">
          <div id="youWant"></div>
        </div>
    </div>
              
  );
}
}

export default App;
