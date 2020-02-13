import React, {Component} from 'react';
import SideNav from './SideNav';
import { Row, Container, Col} from 'react-bootstrap';
class TemporaryDrawer extends Component {

  constructor(props) {
    super(props);
    this.state ={
      visibility : false
    };
    this.toggleVisibility=this.toggleVisibility.bind(this)
    this.closeVisibility=this.closeVisibility.bind(this)
  }
  
  
  toggleVisibility () {
    this.setState ({
      visibility : true    
      
    });
    
  }
  closeVisibility(){
    this.setState ({
      visibility : false    
      
    });
  }
  
  
   render(){
     if (this.state.visibility==true) {
      return (
        
          <div>

            <div className="w3-sidebar w3-bar-block w3-card w3-animate-left"  id="leftMenu">
              <button onClick={this.closeVisibility} className="w3-bar-item w3-button w3-large">Close &times;</button>
              <SideNav
              /> 
            </div> 
            
            <div className="w3-teal">
              <button className="w3-button w3-teal w3-xlarge w3-left" onClick={this.toggleVisibility}>&#9776;</button>
              <div className="w3-containerw3-container">
                <h1>My Page</h1>
              </div>
            </div>
          </div>
        );
    
     }else{
      return (
        <div> 
          <Container className="w3-teal " style={{with: '100%'}}>
            <Row>
              <Col xs lg="2" ><button className="w3-button w3-teal w3-xlarge w3-left"  onClick={this.toggleVisibility}>&#9776;</button></Col>
              <Col className="w3-containerw3-container"><h2>My Page</h2> </Col>
            </Row>
          </Container>
          
          {/* <Container>
            <Row>
              <Col> <button onClick={this.toggleVisibility}>&#9776;</button></Col>
            </Row>
            <Row>
              <Col><h1>My Page </h1></Col>
            </Row>
          </Container>  */}
          
          
        </div>
      );
     }
    
   }
  }
  export default TemporaryDrawer