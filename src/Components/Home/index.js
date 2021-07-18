import React from 'react'
import useStyles from './styles'
import { useAxios } from '../../Hooks/useAxios'
import CircularProgress from '@material-ui/core/CircularProgress';


const Home = () => {
    const classes = useStyles('/user')

    const { response, error, loading } = useAxios()

    let cards;
    if (error) {
        return <div className={classes.root}>
            not found
        </div>
    }
    if (response) {
        cards = response.map(card => (
            <div className={classes.card} key={card.id}>
                <img src={card.picture} alt={`${card.firstName}`} />
                <h6 className={classes.name}>{card.firstName}</h6>
                <p className={classes.email}>{card.email}</p>
            </div>
        )).slice(0, 5)
    }
    return (
        <div className={classes.root}>
            {
                loading ? <CircularProgress color="secondary" size={40} /> : (
                    <div className={classes.cards}>{cards}</div>
                )
            }
        </div>
    )
}

export default Home


