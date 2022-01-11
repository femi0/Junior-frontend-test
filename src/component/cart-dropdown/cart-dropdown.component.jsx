import { PureComponent } from "react";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";

import '../cart-dropdown/cart-dropdown.styles.scss';

class CartDropdown extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="cart-dropdown">
                <div className="cart-items">
                    
                    {
                        this.props.cartItems.map(cartItem =>(
                           <CartItem key={cartItem.id} item={cartItem}/> 
                        ))
                    }
                    
                     </div>
                    
                    <CustomButton />
                        
               
            </div>
        )
    }
}

const mapStateToPops = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToPops) (CartDropdown);