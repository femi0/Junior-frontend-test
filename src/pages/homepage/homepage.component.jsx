import { PureComponent } from "react";
import './homepage.styles.scss';
import Directory from "../../component/directory/directory.component";

class HomePage extends PureComponent{
    render(){
        return(
            <div className="homepage">
                <Directory />
            </div>
        )
    }
}

export default HomePage;