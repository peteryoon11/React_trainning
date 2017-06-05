import React, { Component } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import ViewSelector from './components/ViewSelector';

class App extends Component {
state ={
  view : 'favorite',
  modal :{
    visible : false,
    mode : null
  }
};

modalHandler = {
  
}

  render() {
    return (
      <div>
        <Header/>
        <ViewSelector/>
        <Container /*visible={view=='favorite'}*/>
        </Container>
        <Container>
        </Container>
        
      </div>
    );
  }
}

export default App;
