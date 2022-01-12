import { PureComponent } from "react";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import '../cart-dropdown/cart-dropdown.styles.scss';

class CartDropdown extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        const {cartItems, dispatch} = this.props
        return(
            <div className="cart-dropdown">
                <div className="cart-items">
                    
                    { cartItems.length ? (
                            cartItems.map(cartItem => (
                                <CartItem key={cartItem.id} item={cartItem}/> 
                             ))
                        ) : (
                        <span className="empty-message"> Your cart is empty</span>
        )}
                    
                     </div>
                    
              
                   <CustomButton />
                         
               
            </div>
        )
    }
}

const mapStateToPops = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToPops) (CartDropdown);