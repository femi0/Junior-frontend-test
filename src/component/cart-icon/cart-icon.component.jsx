import { PureComponent } from "react";
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";  

import {ReactComponent as ShoppingIcon} from '../../Assets/shopping.svg';

import '../cart-icon/cart-icon.styles.scss';


class CartIcon extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        const {toggleCartHidden, itemCount} =this.props
        return(
            <div className="cart-icon" onClick={toggleCartHidden}>
                <ShoppingIcon className="shopping-icon"/>
                <span className="item-count"> {itemCount} </span>
            </div>
        )

    }
    
}
const mapDispatchToProps = dispatch => ({ 
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToPops = (state) => ({
    itemCount: selectCartItemsCount (state)
});


export default connect(mapStateToPops, mapDispatchToProps)(CartIcon);