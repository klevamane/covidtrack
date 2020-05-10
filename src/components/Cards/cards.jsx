import React from 'react';
import { Card, CardContent, Grid, Typography} from '@material-ui/core';
import CountUp from 'react-countup';
import Moment from 'react-moment';
import cn from 'classnames';

import styles from './cards.module.css';

const Cards = ({ data: {recovered, deaths, confirmed, lastUpdate }}) => {
    // if not one, then not all, ie recovered can check for all
    if(!recovered) {
        return 'Loading';
    }
    return (
        <div className={cn(styles.container, styles.grow)}>
            <Grid container spacing={3} justify="center" md={16}>
                <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h6">
                            <CountUp end={confirmed} duration={2} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">
                            <Moment fromNow>{lastUpdate}</Moment>
                        </Typography>
                        <Typography variant="body2">Number of covid19 cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h6">
                            <CountUp end={recovered} duration={2} separator=","/>
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
                            <CountUp end={deaths} duration={2} separator=","/>
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