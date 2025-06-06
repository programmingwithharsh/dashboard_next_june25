'use client';
import React from 'react';
import Title from './Title';
import Welcome from './Welcome';
import ProducList from './ProducList';
import AddProduct from './AddProduct';

export default class Main extends React.Component {
    constructor() { // lifecycle number 1
        super();
        this.state = { // define state
            username: "Attri"
        }
    }

    updateUserName = () => { // Update state using this.setState({})
        this.setState({
            username: "Partik"
        })
    }
    render() { // lifecycle number 2
        const x = 2;
        const interests = ["Listening Music", "Crafting", "Painting", "Cooking"]; // Array
        const name = "Rushika"; // String
        const birth = { // Object
            place: "Hyderabad",
            year: 2000
        };

        return (
            <div>
                <h1>This is Main Class Component</h1>
                <h2>State username is {this.state.username}</h2>
                <button onClick={this.updateUserName}>Update Username</button>
                <Title x={x} name={name} interests={interests} birthDetail={birth} text="Dashboard Title" />
                <Welcome />
                <ProducList />
                <AddProduct />
            </div>
        )
    }
}

// export default Main;