import { PureComponent } from "react";

import Men from "./men.data";

import PreviewCollection from "../../component/preview-collection/preview-collection.component";

class Mens extends PureComponent{
    constructor(props){
        super(props)

        this.state ={
            collection: Men
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


export default Mens;