import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        // imageUrl:'https://picsum.photos/200'
    }
    styles = {
        fontSize:20,
        fontWeight:'bold'
    }

    render() { 
        return (
              <React.Fragment>
                {/* <img src={this.state.imageUrl} alt=""></img> */}
                <span style={this.styles}  className="badge badge-primary m-2">{this.formateCount()}</span>
                <button className='btn btn-secondary btn-sm'>Increment</button>
              </React.Fragment>
        );  
    }

    formateCount () {
        const {count}  = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;