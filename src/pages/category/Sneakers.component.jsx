import { PureComponent } from "react";

import Sneaker from "./Sneaker.data";

import PreviewCollection from "../../component/preview-collection/preview-collection.component";

class Sneakers extends PureComponent{
    constructor(props){
        super(props)

        this.state ={
            collection: Sneaker
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


export default Sneakers;