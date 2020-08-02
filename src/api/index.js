import axios from 'axios';

const baseUrl = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let url = baseUrl;
    if(country) {
        url = `${baseUrl}/countries/${country}`
    }
    try {
        // check the api docs for more details
        // https://covid19.mathdro.id/api
        const { data: { confirmed, deaths, recovered, lastUpdate, countries } } = await axios.get(url);
        const response = {
            confirmed: confirmed.value,
            deaths: deaths.value,
            recovered: recovered.value,
            lastUpdate: lastUpdate
            
        }
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}/daily`);
        
        const requiredData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            death: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        console.log('fetched daily data ', requiredData);
        return requiredData;
    } catch (error) {
        console.log(error);
    }
}
const setCountryDetails = (country) => {
    return {
        name: country.name,
        iso: country.iso2
    }
}
export const countries = async () => {
    try {
        const { data: { countries }} = await axios.get(`${baseUrl}/countries`);
        return countries.map(setCountryDetails);
    } catch (error) {
        console.log({ error });
    }
}