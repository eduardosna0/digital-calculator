import React, { Component } from "react";

class Button extends Component {
  
  
  
  
  handleClick() {
    const {disabled, onClick} = this.props
    if ((onClick) && (!disabled)) {
      this.props.onClick();
    }
  }  
  render() {
    const cssBtnClass = this.props.disabled? "calculadora-btn btn-disabled" : "calculadora-btn";
    const cssClasses = (this.props.cssClasses ? this.props.cssClasses : "")  

    return (
      <div className={cssBtnClass +" "+ cssClasses} onClick={this.handleClick.bind(this)}>
        {this.props.display}
      </div>
    );
  }
}

export default Button;
