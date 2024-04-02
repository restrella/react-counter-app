import { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">
            Navbar
            <span className="badge bg-secondary m-2">{this.props.totalCount}</span>
          </span>
        </div>
      </nav>
    );
  }
}
