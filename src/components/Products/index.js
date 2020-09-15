import React, { Component } from 'react';
import API from '../../data/db.json';

export default class Products extends Component {
    state={
        products: [],
    }
    async componentDidMount() {
        const response = await API.get('');
        
        console.log(response.data);

        this.setState({ products: response.data });
    }

    render() {
        return (
            <div>
                <h1>Listar Produtos</h1>
            </div>
        );
    };
};