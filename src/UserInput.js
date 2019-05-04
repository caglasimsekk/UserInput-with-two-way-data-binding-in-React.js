import React from "react";
import  "./UserInput.css";
const input = props => {
  return (
    <div className="UserInput">
      <input
        type="text"
        onChange={props.input}
        placeholder="Enter the new name.."
      />
      <p>{props.input}</p>
    </div>
  );
};
// class UserInput extends Component {
//   state = {
//     input: ""
//   };
//   handler = event => {
//     this.setState({
//       input: event.target.value
//     });
//   };
//   render() {
//     return (
//       <div>
//         <input type="text" onChange={this.handler} placeholder="Enter the new name.." />
//         <p>{this.state.input}</p>
//       </div>
//     );
//   }
// }
export default input;
