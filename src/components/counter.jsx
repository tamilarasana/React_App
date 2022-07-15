import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    }

    render() { 
        return (
              <React.Fragment>
                <span>{this.formateCount()}</span>
                <button >Increment</button>
              </React.Fragment>
        );  
    }

    formateCount () {
        const {count}  = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}
 
export default Counter;