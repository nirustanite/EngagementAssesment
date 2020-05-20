import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: "black",
        padding: theme.spacing(8),
        marginTop: 'auto',
    },
}));


export default function Footer(){
    const classes = useStyles();
    return(
        <React.Fragment>
        <CssBaseline />
        <footer className={classes.footer} color="primary">
        </footer>
        </React.Fragment>
    )
}