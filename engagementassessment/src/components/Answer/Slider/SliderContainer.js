import React from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';



const PrettoSlider = withStyles({
    root: {
      color: '#0d47a1',
      height: 8,
      width: 500,
      marginLeft: 30,
    },
    thumb: {
      height: 24,
      width:24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 0,
      marginLeft: 100
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 2,
    },
  })(Slider);

function valuetext(value) {
    return `${value}`;
}

export default function SliderContainer(props) {
    
return(
    <React.Fragment>
        <PrettoSlider
        defaultValue={props.details.defaultSelected}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={props.details.step}
        marks={props.details.labels}
        min={props.details.start}
        max={props.details.end}
        />
    </React.Fragment>

)}







          