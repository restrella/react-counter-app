import { Component } from "react";

export default class Counter extends Component {
  state = {
    name: "Hello World",
    image: "https://picsum.photos/200",
    //   counter: 10,
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

  formatText() {
    if (this.props.counter.value > 0) {
      return this.props.counter.value;
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
    console.log(this.props);
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
          onClick={() => this.props.onDecrement(this.props.counter.id)}>
          -
        </button>
        <button
          className="btn btn-primary ms-1"
          onClick={() => this.props.onIncrement(this.props.counter.id)}>
          +
        </button>
        <button
          className="btn btn-primary ms-1"
          onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </div>
      //   </>
    );
  }
}
