import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './Demo.css';

const Demo = (props) =>
{
    return<div className = "main_class">
    <h1>Hello {props.name}</h1>
<p>Welcome to the app world!!!</p>
</div>
}


export default Demo;