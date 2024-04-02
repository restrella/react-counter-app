import { Component } from "react";

export default class Counter extends Component {
  state = {
    name: "Hello World",
    image: "https://picsum.photos/200",
    counter: 10,
    tags: ["tag1", "tag2"],
  };

  styles = {
    fontSize: 20,
    color: "red",
  };
  getName() {
    // return <h1>Big Name</h1>;
    return this.state.name;
  }

  renderTags() {
    return this.state.tags.length > 0 ? (
      <>
        <div>Tags</div>

        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </>
    ) : (
      <h1>There are no tags!</h1>
    );
    // return (
    //   this.state.tags.length > 0 && (
    //     <>
    //       <div>Tags</div>

    //       {this.state.tags.map((tag) => (
    //         <li key={tag}>{tag}</li>
    //       ))}
    //     </>
    //   )
    // );
  }

  handleIncrement = (increment) => {
    // console.log("handleIncrement", this.state.counter);
    // this.state.counter++;
    this.setState({ counter: this.state.counter + increment });
  };
  handleDecrement = (decrement) => {
    // console.log("handleIncrement", this.state.counter);
    // this.state.counter++;
    this.setState({ counter: this.state.counter - decrement });
  };

  formatText() {
    if (this.state.counter > 0) {
      return this.state.counter;
    }
    return "Zero/es";
  }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   handleIncrement() {
  //     console.log("handleIncrement", this.state.counter);
  //     this.setState({ counter: this.state.counter + 2 });
  //   }

  //   doHandleIncrement = () => {
  //     this.handleIncrement(2);
  //   };
  render() {
    return (
      //   <>
      // {/* {this.getName()} */}
      <div>
        {/* <span style={this.styles}>{this.state.name}</span> */}
        {/* <img src={this.state.image}></img> */}
        {/* {this.state.counter} */}
        {this.formatText()}
        {/* {this.renderTags()} */}
        <button
          className="btn btn-primary ms-4"
          disabled={this.state.counter <= 0}
          onClick={() => this.handleDecrement(1)}>
          -
        </button>
        <button
          className="btn btn-primary ms-1"
          onClick={() => this.handleIncrement(1)}>
          +
        </button>
      </div>
      //   </>
    );
  }
}
