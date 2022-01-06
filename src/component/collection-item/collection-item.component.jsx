import { PureComponent } from "react";
import '../collection-item/collection-item.styles.scss';

class CollectionItem extends PureComponent{
    render(){
        return(
            <div className="collection-item">
                <div className="image"
                style={{
                    backgroundImage: `url(${this.props.imageUrl})` 
                }}
                />
                
                    <div className="collection-footer">
                        <span className="name">{ this.props.name }</span>
                        
                        <span className="price">{this.props.price}</span> 
                    </div>

            </div>
        )
    }
}

export default CollectionItem;