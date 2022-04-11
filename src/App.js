import './App.css';
import Navigation from './componets/navigation/Navigation';
import ImageLinkForm from './componets/imageLinkForm/imageLinkForm';
import Logo from './componets/Logo/logo';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        < ImageLinkForm />
  
      </div>
    );
  }
}

export default App;

