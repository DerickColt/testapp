import React, { Component } from 'react';
import logo from './logo.svg';
import ModalExample from './modal'
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function welcome() {
  var listOfPeople = [
      {
          name:'foo',
          gender:'male',
      },
      {
          name:'bar',
          gender:'female',
      },
  ]
  return (
          <div className="component">
              {listOfPeople.map(function(person, index){
                  return <p id={index}>{person} {person}</p>;
              })}
          </div>
      )
  }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button className="Danger">BOOSHH</Button>
          <button className="Danger">BOOSHH</button>

          <h1 className="App-title">Welcome to Hell</h1>
        </header>
        <p className="App-intro" styles="margin-bottom: 25px;">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        
         <img src="http://www.nowtheendbegins.com/wp-content/uploads/2015/10/6-horrific-facts-about-hell-you-need-to-know-sheol-hades-gehenna.jpg" />
        </div>
        <div>
          <ModalExample />
        </div>
      </div>
    );
  }
}

export default App;
