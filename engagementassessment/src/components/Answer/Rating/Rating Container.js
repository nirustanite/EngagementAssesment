import React from 'react';
import Rating from '@material-ui/lab/Rating';
import './Rating.css';

export default function RatingContainer(props){
    const [valueObj, setValue] = React.useState({id: props.id, value: 2});
    
    return(
        <React.Fragment>
        <p className="option">{props.details.option}</p>
         <Rating
          name={`simple-controlled-${props.id}`}
          value={valueObj.value}
          onChange={(event, newValue) => {
            if(newValue!==null){
                setValue({id: props.id, value: parseInt(event.target.value)});
            }
          }}
        />
        <br />
        </React.Fragment>
    )
}