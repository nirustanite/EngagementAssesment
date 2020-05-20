import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchQuestion, fetchQuestionCount} from '../../store/actions';
import {Link} from 'react-router-dom';
import './Questions.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AnswerContainer from '../Answer/AnswerContainer';

class QuestionContainer extends Component{
 
    
     constructor(props){
       super(props)
       this.state={
        id: Number(this.props.match.params.id)
      }
     }
    
    displayQuestion(questionId){
      this.props.fetchQuestion(questionId);
    }

    handleNextClick = () => {
      const newId = this.state.id + 1;
      if(newId <= this.props.count){
      this.displayQuestion(newId);
      this.setState({
        id: newId
      })}

    }

    handlePrevClick = () => {
      const newId = this.state.id - 1;
      if(newId < this.props.count){
      this.displayQuestion(newId);
      this.setState({
        id: newId
      })}
    }

    handleCLickbutton = () => {
      this.props.history.push('/');
    }

    componentDidMount(){
      this.props.fetchQuestionCount();
      this.displayQuestion(Number(this.props.match.params.id))
    }

   
    render(){
       
        return(
            <React.Fragment>
               
               {this.props.question !=={} && <div className="question-container">
                  <div className="divider"></div>
                  <Typography variant="h5" component="h5">Question {this.state.id} / {this.props.count}</Typography>
                  <hr />

                  <Typography variant="h6" component="h6">{this.state.id}. {this.props.question.description}</Typography>
                  <br />
                   <AnswerContainer answer={this.props.question.answer} />
                   <div className="divider"></div>
                  <div className="button-container">
                    {this.state.id !== 1 && 
                       <Link to={`/questions/${this.state.id - 1}`}>
                       <Button variant="contained" color="primary" onClick={this.handlePrevClick}>Prev</Button></Link>
                    }

                    {this.state.id === this.props.count && <Button  variant="contained"  color="primary" onClick={this.handleCLickbutton}>Submit</Button>}

                    {this.state.id < this.props.count && <Link to={`/questions/${this.state.id + 1}`}>
                      <Button variant="contained" color="primary" onClick={this.handleNextClick}>Next</Button>
                    </Link>}
                  
                  </div>
                
                </div>
             }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
   console.log(state)
    return{
        count: state.questionCount,
        question: state.question
    }
}


export default connect(mapStateToProps,{fetchQuestionCount,fetchQuestion})(QuestionContainer)