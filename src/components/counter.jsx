import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    // tags: ["tag1", "tag2", "tag3"],
  };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no Tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  // constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement  ()  {
  //     console.log("Increment Clicked",this);
  // }
  handleIncrement = product => {
    console.log(product);
    this.setState({
      value: this.state.value + 1,
    });
  };

 
//   doHandleIncrement = () => {
//     this.handleIncrement({id:1});
//   }
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        <button
          onClick={() => this.handleIncrement({id:1}) }
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
        {/* {this.state.tags.length === 0 && "Please Create a new Tag!"} */}
        {/* {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formateCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
