import React from 'react';
import SliderContainer from './Slider/SliderContainer'

export default function AnswerContainer(props){
   console.log("props", props.answer)
    return(
        <React.Fragment>
            {props.answer && props.answer.type === "Slider" && <SliderContainer details={props.answer.typeMeta} />}
        </React.Fragment>
    )
}