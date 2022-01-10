import { PureComponent } from "react";

import CustomButton from "../custom-button/custom-button.component";

import '../cart-dropdown/cart-dropdown.styles.scss';

class CartDropdown extends PureComponent{
    render(){
        return(
            <div className="cart-dropdown">
                <div className="cart-items">
                    <CustomButton />
                        
                </div>
            </div>
        )
    }
}

export default CartDropdown;