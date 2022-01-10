import { PureComponent } from "react";

import '../custom-button/cart-button.styles.scss'

import {ReactComponent as ShoppingIcon} from '../../Assets/shopping.svg';

class CartButton extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
     
        return(
           <div className="cart-ico"> 
                <ShoppingIcon onClick= {this.props.onClick} className="shopping-icon"/>
           </div>
        )
    }
}  

export default CartButton; 