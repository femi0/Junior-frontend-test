import { PureComponent } from "react";

import '../checkout-item/checkout-item.styles.scss';

class CheckOutItem extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        const {cartItem: {name, imageUrl, price, quantity}} = this.props
        return(
            <div className="checkout-item">
                
                <span className="description">{name} <br/> {price}</span>
                <span className="size"></span>
                <span className="span"></span>
                {/* The size wii be a div, not a span. */}
                <span className="span"></span>
                <span className="quantity">{quantity}</span>
                <div className="image-container">
                    <img src={imageUrl} alt="item"/>
                </div>
                <div className="remove-button">
                    &#10005;
                </div>

            </div>
        )
    }
} 

export default CheckOutItem