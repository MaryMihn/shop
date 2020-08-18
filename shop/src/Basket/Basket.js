import React from 'react';

export default  class Basket extends React.Component {

    removeProduct = (id) => {
        this.props.removeProduct(id)
      }

    minusProduct = (id) => {
        this.props.minusProduct(id)
      }

    plusProduct = (id) => {
        this.props.plusProduct(id)
      }

    

    render(){
        let basketProduct =  this.props.basket.map((basketProduct)=> {
            return (<div >
                    <div className="choosen"> 
                    <img className="imgMini" src={basketProduct.src} alt="pic" />
                    <div className="miniName">
                        <p className="pri">Your plant - </p> {basketProduct.name} 
                        <div className="miniPrice">
                            <p className="pri">Price : </p> {basketProduct.price}
                        </div>
                        <div className="miniPrice">
                            <p className="pri">Count : </p> {basketProduct.count}
                        </div>
                    </div>
                    </div>
                    <button className="remove" onClick={() => this.removeProduct(basketProduct.id)}>Remove</button>
                    <button className="button plus" onClick={() => this.plusProduct(basketProduct.id)}>+</button>
                     <button className="button minus" onClick={() => this.minusProduct(basketProduct.id)} >-</button>
                     </div>)
        })

        return(
            <div id="your_choice">
                <div id="choice">
                    <p className="pro">Products:</p><br /> 
                        {basketProduct}
                    <div id="price"> 
                        <p class="pri">Total Price:</p> {this.props.getPrice()}
                    </div>
                    <button id="basket">Buy</button>
            </div>
            </div>
        )
    }
}