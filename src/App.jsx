import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Counter from "./components/Counter";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";

export default class App extends Component {

  state = {
    counters: [
      {
        id: 1,
        value: 0,
      },
      {
        id: 2,
        value: 3,
      },
      {
        id: 3,
        value: 6,
      },
    ],
  };

  handleDelete = (id) => {
    this.setState({
      counters: this.state.counters.filter((counter) => counter.id !== id),
    });
  };
  handleIncrement = (id) => {
    // console.log("handleIncrement", this.state.counter);
    // this.state.counter++;
    this.setState({
      counters: this.state.counters.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            value: counter.value + 1,
          };
        }
        return counter;
      }),
    });
  };
  handleDecrement = (id) => {
    // console.log("handleIncrement", this.state.counter);
    // this.state.counter++;
    this.setState({
      counters: this.state.counters.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            value: counter.value - 1,
          };
        }
        return counter;
      }),
    });
  };

  getCountersWithValue = () => {
    return this.state.counters.filter((counter) => counter.value > 0).length
  }
  render() {
    return (
      <div>
        <Navbar totalCount={this.getCountersWithValue()} />
        {/* {this.getCountersWithValue()} */}
        <div className="container">
          <Counters 
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </div>
      </div>
    );
  }
}
