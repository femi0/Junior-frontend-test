import { PureComponent } from "react";

import MenuItem from "../menu-item/menu-item.component";

import '../directory/directory.styles.scss';
class Directory extends PureComponent{
    constructor(props){
        super(props);

        this.state ={
            sections: [
                {
                    title: 'Womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                  },
                  {
                    title: 'Mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                  },
                  {
                    title: 'Kids',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
            
            }]
        }
    }
    render(){
        return(
            <div className="directory-menu">
                {this.state.sections.map(({title,imageUrl, id}) =>(
                        <MenuItem key={id} title={title} imageUrl={imageUrl} />
                ))
                }
            </div>
        )
    }
}


export default Directory;