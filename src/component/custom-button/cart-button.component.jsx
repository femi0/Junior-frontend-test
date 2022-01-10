import { PureComponent } from "react";

import '../custom-button/cart-button.styles.scss'

import {ReactComponent as ShoppingIcon} from '../../Assets/shopping.svg';

class CartButton extends PureComponent{
    render(){
        return(
           <div className="cart-ico"> 
                <ShoppingIcon className="shopping-icon"/>
           </div>
        )
    }
}  

export default CartButton; 