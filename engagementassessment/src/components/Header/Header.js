import React from 'react';
import { Menu, Container, Image, MenuItem } from 'semantic-ui-react';

export default function HeaderPage(){

    return(
        <React.Fragment>
        <Menu fixed borderless className="menucontainer"> 
            <Container>
                <MenuItem>
                    <img src={require('../../assets/logoicon.png')} size='small'  alt="Talent Data Labs"/>
                    &nbsp;
                    <b>Assessments</b>
                </MenuItem>
            </Container>
        </Menu>
        </React.Fragment>
    )
}
