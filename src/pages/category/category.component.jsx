import { PureComponent } from "react";

import CategoryData from "./category.data";

import PreviewCollection from "../../component/preview-collection/preview-collection.component";

class CategoryPage extends PureComponent{
    constructor(props){
        super(props)

        this.state ={
            collection: CategoryData
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


export default CategoryPage;