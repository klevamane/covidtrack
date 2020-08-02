import React, { useEffect, useState } from 'react';
import { Grid, NativeSelect, FormControl } from '@material-ui/core';
import { countries } from '../../api';

import styles from './countryPicker.module.css';
import spinner from '../spinner/spinner';


const CountryPicker = ({ handleCountryChange, data: { recovered }}) => {
    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const getCountries = async () => {
        setFetchedCountries(await countries())
        }
        getCountries();
    },[setFetchedCountries])
    console.log({fetchedCountries})
    const newLocal = !recovered? <spinner />: <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {fetchedCountries.map((country, index) => <option key={index} value={country.name} iso2={country.iso2}>{country.name}</option>)}
    </NativeSelect> ;
    return (
        <Grid container justify="center" className={styles.mb10}>
        <FormControl>
            {newLocal}
        </FormControl> 
        </Grid>
    )
}

export default CountryPicker;