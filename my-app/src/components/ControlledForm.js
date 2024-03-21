import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            category: '',
            comments: '',
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value,
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h2>Please fill out the form below:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your name:</label>
                        <input
                            id="id-name"
                            value={this.state.name}
                            name="name"
                            onChange={this.handleNameChange}
                            type="text">
                        </input>
                    </div>
                    <div>
                        <label htmlFor="id-category" name="category">Category?</label>
                        <select 
                        id="id-category" 
                        value={this.state.category} 
                        onChange={this.handleCategoryChange}>
                            <option value="website">Website issue</option>
                            <option value="order">Order issue</option>
                            <option value="general">General inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea 
                        id="id-comments" 
                        name="comments" 
                        value={this.state.comments} 
                        onChange={this.handleCommentsChange}/>
                    </div>
                    <input type="submit" value="Submit"></input>
                </form>


            </div>
        )
    }
}

export default ControlledForm
