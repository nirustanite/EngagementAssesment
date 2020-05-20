import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: "black",
    }
}));



export default function Header(){
    const classes = useStyles();

    return(
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <Typography variant="h6"  noWrap>
                       Talent Data Labs
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}