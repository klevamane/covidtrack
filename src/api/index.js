import axios from 'axios';

const covidUrl = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let url = covidUrl;
    if(country) {
        url = `${covidUrl}/countries/${country}`
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
        const { data } = await axios.get(`${covidUrl}/daily`);
        
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

export const countries = async () => {
    try {
        const { data: { countries }} = await axios.get(`${covidUrl}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log({ error });
    }
}