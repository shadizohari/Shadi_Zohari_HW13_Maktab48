import '../css/CallingCode.css';
// import images from '../img/downsize.png';



const CallingCode = ({ callingCode, ...props }) => {

  return (
    <div className="container-callingCode">
        <h2 className="titre-callingCode">Calling Code</h2>
      <div className="collingCode">
        <h1>{callingCode}</h1>
      </div>
    </div>
  )
}

export default CallingCode;