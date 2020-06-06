import React, { useState, useEffect } from 'react';
import { Line, Bar, Pie} from 'react-chartjs-2';

import { fetchDailyData } from '../../api'

import styles from './chart.module.css';
import { Grid, Typography } from '@material-ui/core';

const Chart = ({ data, country }) => {
    // Used Only For the Line chart / global data
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const accessAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        accessAPI()
    }, []);

    const lineChart = (
        dailyData.length ?
            (   
                <Line
                    data={{
                        labels: dailyData.map(({ date}) => date), 
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#333fff',
                            fill: true
                        }, {
                            data: dailyData.map(({ death }) => death),
                            label: 'Deaths',
                            borderColor: 'rgba(255, 0, 0, 0.5)',
                            fill: true
                        }]}}
                />
            ): null
    )
    const barChart = (
        data.confirmed ?
            (
                <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{ label: 'People', backgroundColor: [
                        'rgba(0, 0,250, 0.5)',
                        'rgba(250, 0, 0, 0.5)',
                        'rgba(0, 250,0, 0.5)',
                    ],
                    data: [data.confirmed, data.recovered, data.deaths]
                }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}`},
                }} 
                 />
            ): null
    );
    return (
        <Grid container justify="center">
            <Grid md={9}>
                { country ? barChart: lineChart }
            </Grid>
        </Grid>
        
    )
}

export default Chart;