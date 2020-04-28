import React, { Component } from 'react'

class TextBox extends Component {
    constructor() {
        super()
    }

    render() {
        return(
        <div contentEditable="true" placeholder="Enter your text here">
        </div>)
    }
}

export default TextBox