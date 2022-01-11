 import { PureComponent } from "react";

import '../cart-item/cart-item.styles.scss';

class CartItem extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        const {item:{imageUrl, price, name, quantity}} = this.props
        return(
            <div className="cart-item">
                 <img src={imageUrl} alt="item" />
                 <div className="item-details">
                 <span className="price"> {name}</span>
                     <span className="price">{quantity} X ${price}</span>

                 </div>
            </div>
        )
    }
}

export default CartItem;