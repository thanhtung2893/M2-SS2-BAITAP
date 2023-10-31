import React, { Component } from 'react'

export default class Bai1 extends Component {
    
  render() {
    let arr=["HTML","Javscrip","Python","C#"]
    return (
      <div>
        <h1>DANH SÁCH KHÓA HỌC</h1>
        <ul>
      {arr.map((item,index)=>(
        <li key={index}>{item}</li>
      ))}
    </ul>
      </div>
    )
  }
}
