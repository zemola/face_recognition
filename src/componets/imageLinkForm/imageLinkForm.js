import './ImageLinkForm.css';

function ImageLinkForm() {
  return (
    <div className="ma4">
      <p className='f3 center'>
        {'This magic brain will detect faces in your picture. Give it a trial'}
      </p>
      <div>
        <input className='f4 pa2 w-70 center' type= 'text'/>
        <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-green'>Detect</button>
      </div>
    </div>
  );
}

export default ImageLinkForm;
