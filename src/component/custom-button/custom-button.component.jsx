import { PureComponent } from "react";

import '../custom-button/custom-button.styles.scss'

class CustomButton extends PureComponent{
    render(){
        return(
           <button className="custom-button">
              CHECK OUT
           </button>
        )
    }
}  

export default CustomButton; 