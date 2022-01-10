import { PureComponent } from "react";
import { connect } from "react-redux";
import CartButton from "../custom-button/cart-button.component";
import { addItem } from "../../redux/cart/cart.actions";
import '../collection-item/collection-item.styles.scss';


class CollectionItem extends PureComponent{
   
    render(){
       
        return(
            <div className="collection-item">
                <div className="image"
                style={{
                    backgroundImage: `url(${this.props.imageUrl})` 
                }}
                > 
                    <CartButton onClick={() => addItem(this.props.newItem)}/>
                </div>
                
                    <div className="collection-footer">
                        <span className="name">{ this.props.name }</span>
                        
                        <span className="price">{this.props.price}</span> 
                    </div>
                   
            </div>
        )
    }
}

const  mapDispatchToProps = dispatch => ({
    addItem: newItem => dispatch(addItem(newItem))
})

export default connect(mapDispatchToProps) (CollectionItem);