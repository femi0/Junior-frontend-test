import { PureComponent } from "react";
import { Link } from 'react-router-dom';


import '../header/header.styles.scss';

class HeaderSection extends PureComponent{
    render(){
        return(
           <div className="header">
                <div className="options">
                <Link className="option" to='/'>
                        Women
                    </Link>
                <Link className="option" to='/Men'>
                    Men
                </Link>
                <Link className="option" to='/Sneakers'>
                        Sneakers
                    </Link>
                    {/*<Link className="logo-container" to='/'>
                        <Logo className="logo" />
                    </Link>*/}
                </div>
           </div> 
        )
    }
}


export default HeaderSection;