import React from 'react';
import Typography from '@material-ui/core/Typography';


export default function ResultContainer(){
    return(
        <React.Fragment>
        <div className="result-container">
            <Typography variant="h3" component="h3"> You have completed the assessments </Typography>
        </div>
        </React.Fragment>
    )
}