import React from 'react';
import { Avatar, Card, CardContent, Grid, Typography} from '@material-ui/core';
import CountUp from 'react-countup';
import Moment from 'react-moment';
import cn from 'classnames';

import styles from './cards.module.css';
import Spinner from '../spinner/spinner';

const Cards = ({ data: {recovered, deaths, confirmed, lastUpdate }, iso2 }) => {

    let showFlag = '';
    if(iso2) {
        showFlag = <Avatar alt="" rounded src={`https://www.countryflags.io/${iso2}/flat/64.png`} />
    }

    return (
        <div className={cn(styles.container, styles.grow)}>
            <Typography variant="h4" align="center" className={cn(styles.m_btm20, styles.covid_header)}>
                Corona virus
                </Typography>
                <Typography variant="h4" align="center" className={cn(styles.m_btm20, styles.covid_header)}>
                covid-19
                </Typography>
                <Typography variant="h4" align="center" className={cn(styles.m_btm20, styles.covid_header)}>
                tracker
                </Typography>
            <Grid container spacing={3} justify="center" md={16}>
                <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        {/* <img src="https://www.countryflags.io/be/flat/:size.png"> */}
                        <Typography variant="h6">
                            <CountUp end={confirmed? confirmed: ''} duration={2} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">
                            <Moment fromNow>{lastUpdate}</Moment>
                        </Typography>
                        <Typography variant="body2">Number of covid19 cases</Typography>
                        {showFlag}
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h6">
                            <CountUp start={5} end={recovered?recovered:''}/>
                            {/* <h3>{recovered}</h3> */}
                        </Typography>
                        <Typography color="textSecondary">
                            <Moment fromNow>{lastUpdate}</Moment>
                        </Typography>
                        <Typography variant="body2">Recovered cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.death)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h6">
                            <CountUp end={deaths?deaths: ''} duration={2} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">
                            <Moment fromNow>{lastUpdate}</Moment>
                        </Typography>
                        <Typography variant="body2">Number of deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;