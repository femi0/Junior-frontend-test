import { PureComponent } from "react";
import CollectionItem from "../collection-item/collection-item.component";

import '../preview-collection/preview-collection.styles.scss';

class PreviewCollection extends PureComponent{
    render(){
        return(
            <div className="collection-preview">
                <h1 className="title">{this.props.title.toUpperCase()}</h1>
            <div className="preview">
                {
                   this.props.items.filter((item, idx) => idx < 3).map(({ id,  ...otherItemProps }) => (
                        <CollectionItem key={id} {...otherItemProps} />
                    ))
                }

            </div>
            <br />
            <div className="preview">
                {
                   this.props.items.filter((item, idx) => idx > 2).map(({ id,  ...otherItemProps }) => (
                        <CollectionItem key={id} {...otherItemProps} />
                    ))
                }

            </div>
            </div>
        )
    }
}

export default PreviewCollection;