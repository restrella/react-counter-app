import { Component } from "react";
import Counter from "./Counter";

// export default class Counters extends Component {
  
//   render() {
//     return (
//       <div>
//         {this.props.counters.map((counter) => (
//           <Counter
//             key={counter.id}
//             counter={counter}
//             onDelete={this.props.onDelete}
//             onIncrement={this.props.onIncrement}
//             onDecrement={this.props.onDecrement}
//           />
//         ))}
//       </div>
//     );
//   }
// }

import React from 'react'

const Counters = (props) => {
  return (
          <div>
            {props.counters.map((counter) => (
              <Counter
                key={counter.id}
                counter={counter}
                onDelete={props.onDelete}
                onIncrement={props.onIncrement}
                onDecrement={props.onDecrement}
              />
            ))}
          </div>
        );
}

export default Counters