import { PureComponent } from "react";

import '../custom-button/cart-button.styles.scss'

import {ReactComponent as ShoppingIcon} from '../../Assets/shopping.svg';

class CartButton extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
     
        return(
           <div className="cart-ico" onClick= {this.props.onClick}> 
                <ShoppingIcon className="shopping-icon"/>
           </div>
        )
    }
}  

export default CartButton; 