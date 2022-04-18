import './imageLinkForm.css';

function ImageLinkForm() {
  return (
    <div className="ma4">
      <p className='f3 center'>
        {'This magic brain will detect faces in your picture. Give it a trial'}
      </p>
      <div className=' center' >
        <div className='form center pa3 br5 shadow-5'>
          <input className='pa2 w-70' type= 'text'/>
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-green'>Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
