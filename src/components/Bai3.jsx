import React, { Component } from 'react'

export default class Bai3 extends Component {
    constructor(){
        super();
        this.state={
            time: new Date().toLocaleTimeString(),
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        },1000)
    }
  render() {
    return (
      <div>
       <h3>Xin chào các bạn </h3>
       <p>bây giờ là:  {this.state.time}</p>
      </div>
    )
  }
}
