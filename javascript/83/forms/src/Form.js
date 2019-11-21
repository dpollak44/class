import React, { Component } from 'react';

export default class Form extends Component {
    state = {
        name: 'Donald',
        age: 70,
        email: 'dtrump@whitehouse.gov'
    }

    /*handleNameChange = event => {
        this.setState({
            name: event.target.value
        });
    }

    handleAgeChange = event => {
        this.setState({
            age: event.target.value
        });
    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });
    }*/

    handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        //const newState = {}
        //newState[name] = value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        alert(`${this.state.name} has been registered with email ${this.state.email}`);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Name: <input name="name" value={this.state.name} onChange={/*this.handleNameChange*/ this.handleInputChange} />
                Age: <input name="age" type="number" value={this.state.age} onChange={/*this.handleAgeChange*/ this.handleInputChange} />
                Email: <input name="email" type="email" value={this.state.email} onChange={/*this.handleEmailChange*/ this.handleInputChange} />
                <button>register!</button>
                <button type="button" onClick={() => this.setState({ name: 'Foo' })}>Change Name</button>
                <hr />
                {JSON.stringify(this.state)}
            </form>
        );
    }
}