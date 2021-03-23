import React, { Component } from "react";
import Display from "../components/display";
import Button from "../components/button";

class Calculadora extends Component {
  intialState = { firstValue: 0, secondValue: 0, operator: 1, operation: 1};
  constructor(props) {
    super(props);
    this.state = this.intialState;
  }

  getValue = () => {
    const { firstValue, secondValue, operation, operator } = this.state;
    switch (operator) {
      case 1:
        return firstValue;
      case 2:
        return secondValue;
      case 3:
        return this.doOperation(firstValue, secondValue, operation);
    }
  };



  doOperation(firstValue, secondValue, operation){
    if(operation ===1){
      return firstValue + secondValue
    }
    if (operation ===2){
      return firstValue - secondValue
    }
    if(operation ===3){
      return firstValue * secondValue
    }
    if (operation ===4){
      if(secondValue ===0){        
        return "Divisao por 0";
      }
      return firstValue / secondValue
    }

    if (operation === 5){
      return firstValue**2;      
    }
  }


  setValue = (value) => {
    const { firstValue, secondValue, operator } = this.state;
    const lastValue = operator === 1 ? firstValue : secondValue;
    switch (operator) {
      case 1:
        this.setState({ firstValue: lastValue * 10 + value });
        break;
      case 2:
        this.setState({ secondValue: lastValue * 10 + value });
        break;
    }
  };

  pickOperation = (operation) => {
    if(operation !== 5 ){
      this.setState({ operator: 2, operation });
    }
    else{
      this.setState({ operator: 3, operation });
    }
    
  };

  execOperation = (_) => {
    this.setState({ operator: 3 });
  };

  clear = (_) => {
    this.setState(this.intialState);
  };

  render() {
    const { operator } = this.state;
    return (
      <div className={"calculadora"}>
        <Display value={this.getValue()}></Display>

        <div className={"calculadora-btn-group"}>
          <div className={"calculadora-nums"}>
            <Button
              display={"1"}
              onClick={() => this.setValue(1)}
              disabled={operator === 3}
            ></Button>
            <Button
              display={"2"}
              onClick={() => this.setValue(2)}
              disabled={operator === 3}
            ></Button>
            <Button
              display={"3"}
              onClick={() => this.setValue(3)}
              disabled={operator === 3}
            ></Button>
            <Button
              display={"4"}
              onClick={() => this.setValue(4)}
              disabled={operator === 3}
            ></Button>
            <Button
              display={"5"}
              onClick={() => this.setValue(5)}
              disabled={operator === 3}
            ></Button>
            <Button
              display={"6"}
              onClick={() => this.setValue(6)}
              disabled={operator === 3}
            ></Button>
            <Button
              display={"7"}
              onClick={() => this.setValue(7)}
              disabled={operator === 3}
            ></Button>
            <Button
              display={"8"}
              onClick={() => this.setValue(8)}
              disabled={operator === 3}
            ></Button>
            <Button
              display={"9"}
              onClick={() => this.setValue(9)}
              disabled={operator === 3}
            ></Button>
            <Button
              display={"0"}
              onClick={() => this.setValue(0)}
              disabled={operator === 3}
            ></Button>
            <Button
              cssClasses={"btn-action btn-igual"}
              display={"="}
              disabled={operator === 1}
              onClick={() => this.execOperation()}
            ></Button>
            <Button
              cssClasses={"btn-action btn-clear"}
              display={"C"}
              onClick={() => this.clear()}
            ></Button>
          </div>
          <div className={"calculadora-actions"}>
            <Button
              display={"+"}
              onClick={() => this.pickOperation(1)}
              disabled={operator !== 1}
            ></Button>
            <Button
              display={"-"}
              onClick={() => this.pickOperation(2)}
              disabled={operator !== 1}
            ></Button>
            <Button
              display={"x"}
              onClick={() => this.pickOperation(3)}
              disabled={operator !== 1}
            ></Button>
            <Button
              display={"/"}
              onClick={() => this.pickOperation(4)}
              disabled={operator !== 1}
            ></Button>
            <Button
              display={"√"}
              onClick={() => this.pickOperation(5)}              
              disabled={operator !== 1}
            ></Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculadora;
