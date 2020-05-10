import axios from 'axios';

const covidUrl = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        // check the api docs for more details
        // https://covid19.mathdro.id/api
        const { data: { confirmed, deaths, recovered, lastUpdate } } = await axios.get(covidUrl);
        const response = {
            confirmed: confirmed.value,
            deaths: deaths.value,
            recovered: recovered.value,
            lastUpdate: lastUpdate
            
        }
        console.log(lastUpdate);
        return response;
    } catch (error) {
        console.log(error)
    }
}
