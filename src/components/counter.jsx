import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
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
  handleIncrement = (product) => {
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
      <div className="row">
        <div className="col-1">
           <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        </div>
        <div className="col">
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm">+</button>
          
          <button onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2" 
          disabled={this.props.counter.value === 0 ? "disabled" : ""}>-</button>

        <button  onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm ">X</button>
        {/* {this.state.tags.length === 0 && "Please Create a new Tag!"} */}
        {/* {this.renderTags()} */}
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formateCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
