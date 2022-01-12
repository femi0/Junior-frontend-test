import { PureComponent } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckOutItem from "../checkout-item/checkout-item.component";

import { selectCartItems, selectCountTotal } from "../../redux/cart/cart.selectors";

import '../checkout/checkout.styles.scss';

class CheckOutPage extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        const {cartItems, total } = this.props
        return(
            <div className="checkout-page">
                <div className="checkout-header">
                    <div className="header-block">
                        <span>Description</span>
                    </div>
                    {/*<div className="header-block">
                        <span>Price</span>
        </div>*/}
                    {/*<div className="header-block">
                        <span>Sizes</span>
    </div>*/}
                    <div className="header-block">
                        <span></span>
                    </div>
                    <div className="header-block">
                        <span></span>
                    </div>
                    <div className="header-block">
                        <span>Quantity</span>
                    </div>
                    <div className="header-block">
                        <span>Product</span>
                    </div>
                    <div className="header-block">
                        <span>Remove</span>
                    </div>
                </div>
                {
                    cartItems.map(cartItem =>
                        <CheckOutItem key={cartItem.id} cartItem={cartItem}/>)
                }
                <div className="total"> 
                    <span>TOTAL: $ {total}</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCountTotal
})

export default connect(mapStateToProps)(CheckOutPage);