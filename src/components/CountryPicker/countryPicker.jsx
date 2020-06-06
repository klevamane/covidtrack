import React, { useEffect, useState } from 'react';
import { Grid, NativeSelect, FormControl } from '@material-ui/core';
import { countries } from '../../api';

import styles from './countryPicker.module.css';



const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const getCountries = async () => {
        setFetchedCountries(await countries())
        }
        getCountries();
    },[setFetchedCountries])
    console.log({fetchedCountries})
    return (
        <Grid container justify="center" className={styles.mb10}>
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, index) => <option key={index} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl> 
        </Grid>
    )
}

export default CountryPicker;