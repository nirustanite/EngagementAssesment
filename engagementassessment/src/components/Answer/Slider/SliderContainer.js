import React from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';


const PrettoSlider = withStyles({
    root: {
      color: '#0d47a1',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
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
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

function valuetext(value) {
    return `${value}`;
}
  
export default function SliderContainer(props) {
    console.log("inside Slider")
return(
    <React.Fragment>
        {props.details && <PrettoSlider
        defaultValue={props.details.defaultSelected}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={props.details.step}
        marks={props.details.labels}
        min={props.details.start}
        max={props.details.end}
        />}
    </React.Fragment>

)}