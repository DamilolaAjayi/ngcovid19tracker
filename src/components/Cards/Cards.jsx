import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

const Cards = ({data : { confirmed, recovered, deaths, lastUpdate}}) =>{
   if(!confirmed){
       return "loading...";
   }
   const cardDetails =[
       { style: styles.infected, category: "Infected",  value: confirmed.value, text: "Number of active Covid19 cases"},
       { style: styles.recovered, category:"Recovered", value: recovered.value,  text: "Number of Covid19 recoveries"},
       { style: styles.deaths, category:"Deaths", value: deaths.value,  text: "Number of Covid19 deaths"}];

       return (       
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                {cardDetails.map((card)=>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, card.style)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>{card.category}</Typography>
                    <Typography variant="h5">
                        <CountUp 
                        start={0}
                        end ={card.value}
                        duration={2.5}
                        separator=","
                        />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">{card.text}</Typography>
                </CardContent>
            </Grid> )};
            </Grid>
        </div>
    );
}

export default Cards;