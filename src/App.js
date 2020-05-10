import React, { Component } from 'react'

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api';

import styles from './App.module.css';
class App extends Component {
    // no need for constructor boilerplate
    state = {
        data: {}
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({
            data: fetchedData
        })
    }
    render() {
        const { data } = this.state;

        return (
            <div className={styles.container}>
                <CountryPicker />
                <Cards data={data}/>
                <Chart />
            </div>
        )
    }
}

export default App;