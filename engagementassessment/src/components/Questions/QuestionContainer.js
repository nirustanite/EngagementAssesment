import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchQuestion, fetchQuestionCount} from '../../store/actions';
import {Link} from 'react-router-dom';
import './Questions.css';

import AnswerContainer from '../Answer/AnswerContainer';

import {Container, Segment, Button, Header} from 'semantic-ui-react';

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
      if(this.state.id === this.props.count){
        this.props.history.push('/results')
      }
    }

    componentDidMount(){
      this.props.fetchQuestionCount();
      this.displayQuestion(Number(this.props.match.params.id))
    }

   
    render(){
       
        return(
            <React.Fragment>
               {this.props.question !=={} && <Container className="qmenucontainer">
                  <Segment className="segmentcontainer">
                  <p> Question {this.state.id} / {this.props.count} </p>
                  <Header as="h1" className="question">
                      <i> "{this.props.question.description}"" </i>
                  </Header>
                   
                    
                    <br />
                   <AnswerContainer answer={this.props.question.answers} />
                  </Segment>
                  <br />
                  <div className="buttoncontainer">
                    {this.state.id === 1 ? <Link to={`/questions/${this.state.id - 1}`}>
                      <Button disabled onClick={this.handlePrevClick} className="prevbutton1">Prev</Button>
                    </Link>: <Link to={`/questions/${this.state.id - 1}`}>
                      <Button onClick={this.handlePrevClick} className="button">Prev</Button>
                    </Link>
                    }
                    

                    {this.state.id === this.props.count && <Button className="button" onClick={this.handleCLickbutton}>Submit</Button>}

                    {this.state.id < this.props.count && <Link to={`/questions/${this.state.id + 1}`}>
                      <Button className="button" onClick={this.handleNextClick}>Next</Button>
                    </Link>}
                    </div>
               </Container>}
               
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        count: state.questionCount,
        question: state.question
    }
}


export default connect(mapStateToProps,{fetchQuestionCount,fetchQuestion})(QuestionContainer)



// {this.props.question !=={} && <div className="question-container">
//                   <div className="divider"></div>
//                   <Typography variant="h5" component="h5">Question {this.state.id} / {this.props.count}</Typography>
//                   <hr />

//                   <Typography variant="h6" component="h6">{this.state.id}. {this.props.question.description}</Typography>
//                   <br />
//                    <AnswerContainer answer={this.props.question.answers} />
//                    <div className="divider"></div>
//                   <div className="button-container">
                    
//                    {this.state.id === 1 ?<Link to={`/questions/${this.state.id - 1}`}>
//                     <Button variant="contained" color="primary" onClick={this.handlePrevClick}>Prev</Button>
//                   </Link>: null
//                  }
                    

//                     {this.state.id === this.props.count && <Button  variant="contained"  color="primary" onClick={this.handleCLickbutton}>Submit</Button>}

//                     {this.state.id < this.props.count && <Link to={`/questions/${this.state.id + 1}`}>
//                       <Button variant="contained" color="primary" onClick={this.handleNextClick}>Next</Button>
//                     </Link>}
                  
//                   </div>
                
//                 </div>
//              }