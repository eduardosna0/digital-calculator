import React, {Component} from 'react'

class Display extends Component{
    render(){  
        const valor = isNaN(this.props.value)? 0 : this.props.value;
        const className = isNaN(this.props.value)?  "calcuadora-display divisao-por-zero" : "calcuadora-display";
        return (            
            <div className={className}>
            {valor}
        </div>        
        )        
    }
}

export default Display;