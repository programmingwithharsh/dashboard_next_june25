'use client';
import React from 'react';
import Title from './Title';
import Welcome from './Welcome';
import ProducList from './ProducList';
import AddProduct from './AddProduct';

export default class Main extends React.Component {
    constructor() { // lifecycle number 1
        super();
    }

    render() { // lifecycle number 2
        return (
            <div>
                <h1>This is Main Class Component</h1>
                <Title />
                <Welcome />
                <ProducList />
                <AddProduct />
            </div>
        )
    }
}

// export default Main;