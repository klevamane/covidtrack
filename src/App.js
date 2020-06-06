import React, { Component } from 'react'

import { Cards, CountryPicker, Chart } from './components';
import { fetchData, countries } from './api';

import styles from './App.module.css';
import { Container } from '@material-ui/core';
class App extends Component {
    // no need for constructor boilerplate
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData})
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({ data: fetchedData, country: country});
    }
    render() {
        const { country, data } = this.state;

        return (
            <Container>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart country={country} data={data} />
            </Container>
        )
    }
}

export default App;