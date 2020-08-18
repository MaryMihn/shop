import React from 'react'
import PropTypes from 'prop-types'


export default class ShowProduct extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        addProduct: PropTypes.func.isRequired,
    }
     
    addProduct = () => {
        this.props.addProduct(this.props.id)
    }

    render(){
        return(
            <div className="Product">
                <div className="name">{this.props.name}</div>
                <div className="img">
                    <img className="img" src={this.props.src} alt={this.props.name} />
                </div>
                <div className="bottom">
                    <div className="price">{this.props.price}</div>
                    <button className="buy" onClick = {this.addProduct}>Buy</button>
                </div>
            </div>
        )
    }
}
