import './App.css';
import Navigation from './componets/navigation/Navigation';
import ImageLinkForm from './componets/imageLinkForm/imageLinkForm';
import Logo from './componets/Logo/logo';
import { Component } from 'react';
import Rank from './componets/Rank/rank';

class App extends Component {
  constructor() {
    super()
    this.state = {
    input: ''
  }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

onButtonSubmit = () => {
console.log("click")
}

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        < ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
  
      </div>
    );
  }
}

export default App;

