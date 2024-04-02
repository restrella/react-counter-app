import { Component } from "react";
import Counter from "./Counter";

export default class Counters extends Component {
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
    ],
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} />
        ))}
      </div>
    );
  }
}