import './App.css';
import Navigation from './componets/navigation/Navigation';
import Logo from './componets/Logo/logo';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
  
      </div>
    );
  }
}

export default App;

