import { PureComponent } from "react";

import Women from "./women.data";

import PreviewCollection from "../../component/preview-collection/preview-collection.component";

class Womens extends PureComponent{
    constructor(props){
        super(props)

        this.state ={
            collection: Women
        }
    }
    render(){
        const {collection} = this.state;
        return(
            <div className="category-page">
                {
                    collection.map(({id, ...otherCollectionProps }) => (
                        <PreviewCollection key={id} {...otherCollectionProps} /> 
                    ))
                }
            </div> 
        )
    }
}


export default Womens;