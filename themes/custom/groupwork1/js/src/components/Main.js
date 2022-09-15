import React from "react";
import Button from "./Button";
import Circle from "./Circle";

class Main extends React.Component {
  state = {
    counter: 0,
  };

  addFiveHandler = () => {
    this.setState({
      counter: this.state.counter + 5,
    });
  };

  addOneHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  resetHandler = () => {
    this.setState({
      counter: 0,
    });
  };

  removeOneHandler = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };

  removeFiveHandler = () => {
    this.state.counter < 5
      ? this.setState({
          counter: 0,
        })
      : this.setState({
          counter: this.state.counter - 5,
        });
  };

  render() {
    let className = "circle";

    if (this.state.counter % 2 == 0) {
      className += " odd";
    } else {
      className += " even";
    }

    return (
      <main className="mainArea">
        <div className="circleArea">
          <Circle>
            <p>{this.state.counter}</p>
          </Circle>
        </div>
        <div className="buttonArea">
          <Button click={this.addFiveHandler} value="Add Five" />
          <Button click={this.addOneHandler}>Add One</Button>
          <Button click={this.resetHandler}>Reset</Button>
          <Button click={this.removeOneHandler}>Remove One</Button>
          <Button click={this.removeFiveHandler}>Remove Five</Button>
        </div>
      </main>
    );
  }
}

// const Main = () => {
//   return (
//     <main className="mainArea">
//       <div className="circleArea">
//         <div className="circle">
//           <span className="circleValue">0</span>
//         </div>
//       </div>
//       <div className="buttonArea">
//         <button className="addFive" onClick={buttonHandlerAdd5}>
//           Add Five
//         </button>
//         <button className="addOne" onClick={buttonHandlerAdd1}>
//           Add One
//         </button>
//         <button className="reset" onClick={buttonHandlerRemove}>
//           Reset
//         </button>
//         <button className="removeOne" onClick={buttonHandler}>
//           Remove One
//         </button>
//         <button className="removeFive" onClick={buttonHandler}>
//           Remove Five
//         </button>
//       </div>
//     </main>
//   );
// };

export default Main;
