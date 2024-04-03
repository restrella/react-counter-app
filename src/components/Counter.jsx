import { Component } from "react";

// export default class Counter extends Component {
//   state = {
//     name: "Hello World",
//     image: "https://picsum.photos/200",
//     //   counter: 10,
//     tags: ["tag1", "tag2"],
//   };

//   styles = {
//     fontSize: 20,
//     color: "red",
//   };
//   getName() {
//     // return <h1>Big Name</h1>;
//     return state.name;
//   }

//   renderTags() {
//     return state.tags.length > 0 ? (
//       <>
//         <div>Tags</div>

//         {state.tags.map((tag) => (
//           <li key={tag}>{tag}</li>
//         ))}
//       </>
//     ) : (
//       <h1>There are no tags!</h1>
//     );
//     // return (
//     //   state.tags.length > 0 && (
//     //     <>
//     //       <div>Tags</div>

//     //       {state.tags.map((tag) => (
//     //         <li key={tag}>{tag}</li>
//     //       ))}
//     //     </>
//     //   )
//     // );
//   }

//   formatText() {
//     if (props.counter.value > 0) {
//       return props.counter.value;
//     }
//     return "Zero/es";
//   }

//   getClassNames() {
//     if(props.counter.value > 0) {
//       return "badge bg-primary"
//     }
//     return "badge bg-warning text-dark"
//   }

//   //   constructor() {
//   //     super();
//   //     handleIncrement = handleIncrement.bind(this);
//   //   }

//   //   handleIncrement() {
//   //     console.log("handleIncrement", state.counter);
//   //     setState({ counter: state.counter + 2 });
//   //   }

//   //   doHandleIncrement = () => {
//   //     handleIncrement(2);
//   //   };
//   render() {
//     console.log(props);
//     return (
//       //   <>
//       // {/* {getName()} */}
//       <div className="m-4">
//         {/* <span style={styles}>{state.name}</span> */}
//         {/* <img src={state.image}></img> */}
//         {/* {state.counter} */}

//         <span className={getClassNames()}>
//         {formatText()}
//         </span>


//         {/* {renderTags()} */}
//         <button
//           className="btn btn-primary ms-4"
//           disabled={props.counter.value <= 0}
//           onClick={() => props.onDecrement(props.counter.id)}>
//           -
//         </button>
//         <button
//           className="btn btn-primary ms-1"
//           onClick={() => props.onIncrement(props.counter.id)}>
//           +
//         </button>
//         <button
//           className="btn btn-danger ms-1"
//           onClick={() => props.onDelete(props.counter.id)}>
//           Delete
//         </button>
//       </div>
//       //   </>
//     );
//   }
// }

import React from 'react'

const Counter = (props) => {

  const formatText = () => {
    if (props.counter.value > 0) {
      return props.counter.value;
    }
    return "Zero/es";
  }

  const getClassNames = () => {
    if(props.counter.value > 0) {
      return "badge bg-primary"
    }
    return "badge bg-warning text-dark"
  }

  return (
    <div className="m-4">

      <span className={getClassNames()}>
      {formatText()}
      </span>

      <button
        className="btn btn-primary ms-4"
        disabled={props.counter.value <= 0}
        onClick={() => props.onDecrement(props.counter.id)}>
        -
      </button>
      <button
        className="btn btn-primary ms-1"
        onClick={() => props.onIncrement(props.counter.id)}>
        +
      </button>
      <button
        className="btn btn-danger ms-1"
        onClick={() => props.onDelete(props.counter.id)}>
        Delete
      </button>
    </div>
  );
}

export default Counter