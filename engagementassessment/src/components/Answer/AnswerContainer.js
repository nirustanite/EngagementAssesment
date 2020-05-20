import React from 'react';
import SliderContainer from './Slider/SliderContainer'
import RatingContainer from './Rating/Rating Container';
import TextAreaContainer from './TextArea/TextAreaContainer';



export default function AnswerContainer(props){
    return(
        <React.Fragment>
            {props.answer && props.answer.map((answer,i) => {
               return  <div key={i}>
                   {answer.type === "Slider" && <SliderContainer details={answer.typeMeta} />}
                   {answer.type === "Rating" && <RatingContainer details={answer.typeMeta} id={i} />}
                   {answer.type === "TextArea" && <TextAreaContainer details={answer.typeMeta} />}
                </div>
            })}
        </React.Fragment>
    )
}