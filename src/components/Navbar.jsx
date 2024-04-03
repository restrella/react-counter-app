// import { Component } from "react";

// export default class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar bg-body-tertiary">
//         <div className="container-fluid">
//           <span className="navbar-brand mb-0 h1">
//             Navbar
//             {this.props.totalCount > 0 &&
//             (
//               <span className="badge bg-secondary m-2">
//               {this.props.totalCount}
//               </span>
//             )
//             }
//           </span>
//         </div>
//       </nav>
//     );
//   }
// }

import React from 'react'

const Navbar = (props) => {
  return (
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <span className="navbar-brand mb-0 h1">
                Navbar
                {props.totalCount > 0 &&
                (
                  <span className="badge bg-secondary ms-2">
                  {props.totalCount}
                  </span>
                )
                }
              </span>
            </div>
          </nav>
        );
}

export default Navbar
