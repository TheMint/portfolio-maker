import React, { Component } from 'react'
import './TextBox.css'

class TextBox extends Component {
    constructor() {
        super()
    }

    render() {
        return(
        <div contentEditable="true" className="textBox">
            
        </div>)
    }
}

export default TextBox