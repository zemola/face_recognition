import './logo.css';
import brain from './brain.gif'
import Tilt from 'react-tilty'

function Logo() {
  return (
    <div className="ma4">
        <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
      <div className="Tilt-inner pad3"><img alt='logo'src={brain} /></div>
        </Tilt>
    </div>
  );
}

export default Logo;
