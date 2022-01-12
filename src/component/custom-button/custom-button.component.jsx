import { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import '../custom-button/custom-button.styles.scss'

class CustomButton extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        const {dispatch} = this.props
        return(
            <Link to="/Checkout">
                <button className="custom-button" onClick={() => {
                       dispatch(toggleCartHidden());
                   }}>
              CHECK OUT
           </button>
            </Link>
           
        )
    }
}  

const mapDispatchToProps = dispatch => ({ 
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapDispatchToProps) (CustomButton); 