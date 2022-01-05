import React, {PureComponent} from "react";

import '../menu-item/menu-item.styles.scss';

class MenuItem extends PureComponent{
    render(){ 
        return(
            <div
                style={{
                    backgroundImage: `url(${this.props.imageUrl})`
                }} 
                className="menu-item">
                        <div className="content">
                            <h1 className="title">{this.props.title.toUpperCase()}</h1>
                            <span className="subtitle">LET'S SHOP</span>
                        </div>
                    </div>
        )
    }
}


export default MenuItem;