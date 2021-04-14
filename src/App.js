import React, { Component } from 'react'

import { Cards, CountryPicker, Chart } from './components';
import { fetchData, countries } from './api';


import styles from './App.module.css';
import { Container } from '@material-ui/core';
class App extends Component {
    // no need for constructor boilerplate
    state = {
        data: {},
        country: '',
        countryIso: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData})
    }

    handleCountryChange = async (country, iso2) => {
        const fetchedData = await fetchData(country)
        const allCountries = await countries();
        const filtered = allCountries.filter((c) => c.name == country)
        this.setState({ data: fetchedData, country: country, countryIso: filtered[0]?filtered[0].iso:''});

    }
    render() {
        const { country, data, countryIso } = this.state;

        return (
            <Container>
                <Cards data={data} iso2={countryIso}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} data={data} />
                <Chart country={country} data={data} />
            </Container>
        )
    }
}

export default App;
