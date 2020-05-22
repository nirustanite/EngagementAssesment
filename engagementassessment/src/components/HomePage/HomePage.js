import React from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';
import {Container, Button} from 'semantic-ui-react';

class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            currentQuestionIndex: 1
        }
    }

    render(){
        // const { classes } = this.props;
        return(
            <React.Fragment>
                   <Container className="homecontainer">
                       <p>Engagement Satisfaction</p>
                       <p>Assessment</p>
                       <p>1. Don't refresh the page while taking the Assessment</p>
                       <p>2. Use Previous Button for going back a question</p>
                       <br />
                       
                       <Link to={`/questions/${this.state.currentQuestionIndex}`} >
                         <Button className="homebutton">Start Assessment</Button>
                      </Link>
                   </Container>
            </React.Fragment>
        )
    }
}

export default HomePage



// <div className="body-container">
// <Typography variant="h3" component="h3" className={classes.heading}> Engagement Satisfaction</Typography>
// <Typography variant="h4" component="h4" className={classes.subheading}> Assessment</Typography>
// <Typography variant="h6" component="h6" className={classes.heading}> 1. Don't refresh the page while taking the Assessment</Typography>
// <Typography variant="h6" component="h6" className={classes.subheading}> 2. Use Previous Button for going back a question</Typography>
// <br />
// <Link to={`/questions/${this.state.currentQuestionIndex}`} >
// <Button variant="contained" className="button" color="primary"> Start Assessment</Button></Link>
// </div> 