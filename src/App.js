import './App.css';
import Navigation from './componets/navigation/Navigation';
import ImageLinkForm from './componets/imageLinkForm/imageLinkForm';
import Logo from './componets/Logo/logo';
import { Component } from 'react';
import Rank from './componets/Rank/rank';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        < ImageLinkForm />
  
      </div>
    );
  }
}

export default App;

