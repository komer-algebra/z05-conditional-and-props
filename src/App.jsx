import './App.css';

import { default as Paragraf } from './components/paragraf';
import { Component } from 'react';    // (*) we need to import React.Component to use class components
                                      // here we imported only Component object from React library
                                      // function components do not need this

class App extends Component {         // using Component that we imported - we imported just Component (*)
                                      // so we don't have to reference it with React.Component
  render(){
    return (                          // render method renders and returns element
      <>
        <h1>z5 conditional operators and proxy</h1>
        <Paragraf number={2}/>
      </>
    )
  }
}

export default App;
