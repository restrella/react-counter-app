import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Counter from "./components/Counter";
import Counters from "./components/Counters";

export default class App extends Component {
  render() {
    return (
      <div>
        <Counters />
      </div>
    );
  }
}
