import { PureComponent } from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import '../collection-item/collection-item.styles.scss';
import CartButton from "../custom-button/cart-button.component";

class CollectionItem extends PureComponent{
    constructor(props){
        super(props)
    }
 
    render(){
        
        const {name,price,imageUrl} = this.props.item;
        return(
            <div className="collection-item">
                <div className="image"
                style={{
                    backgroundImage: `url(${imageUrl})` 
                }}
                > 
                    <CartButton onClick={() => {console.log(this.props);addItem(this.props.newItem)}}/>
                </div>
                
                    <div className="collection-footer">
                        <span className="name">{name }</span>
                        
                        <span className="price">{price}</span> 
                    </div>
                   
            </div>
        )
    }
}

const  mapDispatchToProps = dispatch => ({
    addItem: newItem => dispatch(addItem(newItem))
})

export default connect(mapDispatchToProps) (CollectionItem);