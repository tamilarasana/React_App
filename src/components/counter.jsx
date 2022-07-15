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
              <div>
                {/* <img src={this.state.imageUrl} alt=""></img> */}
                <span  style={this.styles}  className={this.getBadgeClasses()}>{this.formateCount()}</span>
                <button className='btn btn-secondary btn-sm'>Increment</button>
              </div>
        );  
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formateCount () {
        const {count}  = this.state;
        return count === 0 ? "Zero" : count;
    }


}
 
export default Counter;