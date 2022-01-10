import { PureComponent } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import '../header/header.styles.scss';
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

class HeaderSection extends PureComponent{
    render(){
        return(
            <div className="header">
                <div className="options">
                <Link className="option" to='/'>
                        Women
                    </Link>
                <Link className="option" to='/Men'>
                    Men
                </Link>
                <Link className="option" to='/Sneakers'>
                        Sneakers
                    </Link>
                    {/*<Link className="logo-container" to='/'>
                        <Logo className="logo" />
                    </Link>*/}
                    <CartIcon className="cart-container"/>
                </div>
                     { this.props.hidden ? null :  <CartDropdown /> }
           </div> 
        )
    }
}
const mapStateToProps = ({cart: {hidden}}) => ({
    hidden
});


export default connect(mapStateToProps) (HeaderSection);