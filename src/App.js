// import React, { useState } from 'react';

// function App() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [predictionResult, setPredictionResult] = useState('');
//   const [showSubmit, setShowSubmit] = useState(true);

//   // Function to handle image upload
//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     setSelectedImage(file);
//   };

//   // Function to handle prediction
//   const handlePrediction = () => {
//     // Perform your prediction logic here using the selectedImage
//     // Replace this with your actual prediction function using your ML model
//     // For example, a dummy prediction result
//     const dummyPrediction = "Wheat"; // Replace this with the actual prediction

//     setPredictionResult(dummyPrediction);
//     setShowSubmit(false); // Hide submit button after prediction
//   };

//   // Function to reset state for a new prediction
//   const handlePredictAnother = () => {
//     setSelectedImage(null);
//     setPredictionResult('');
//     setShowSubmit(true); // Show submit button when predicting again
//   };

//   const appStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     minHeight: '100vh',
//     backgroundImage: `url('https://images.unsplash.com/photo-1511735643442-503bb3bd348a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNyb3BzfGVufDB8fDB8fHww')`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     color: '#fff',
//     fontFamily: 'Arial, sans-serif',
//     // paddingTop: '200px', // Adjust the top padding as needed
//   };

//   const contentStyle = {
//     textAlign: 'center',
//     marginTop: '30px',
//   };

//   const buttonStyle = {
//     padding: '15px 30px',
//     fontSize: '16px',
//     backgroundColor: '#4caf50',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//     margin: '10px',
//   };

//   return (
//     <div className="App" style={appStyle}>
//       <h1 style={{ marginTop: '230px', fontSize: '60px', fontFamily: 'serif'}}>Crop Detection System</h1>
//       <div style={contentStyle}>
//         {showSubmit ? (
//           <div>
//             <input className='file-input' type="file" accept="image/png, image/jpeg, image/jpg" onChange={handleImageUpload} />
//             <button style={buttonStyle} onClick={handlePrediction}>Submit</button>
//           </div>
//         ) : null}

//         {predictionResult && (
//           <div className='predict-another'>
//             <h2>Result: {predictionResult}</h2>
//             <button style={buttonStyle} onClick={handlePredictAnother}>Predict Another</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [predictionResult, setPredictionResult] = useState('');
  const [showSubmit, setShowSubmit] = useState(true);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handlePrediction = () => {
    const dummyPrediction = "Wheat"; // Replace this with your actual prediction

    setPredictionResult(dummyPrediction);
    setShowSubmit(false);
  };

  const handlePredictAnother = () => {
    setSelectedImage(null);
    setPredictionResult('');
    setShowSubmit(true);
  };

  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: `url('https://images.unsplash.com/photo-1511735643442-503bb3bd348a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNyb3BzfGVufDB8fDB8fHww')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  };

  const contentStyle = {
    textAlign: 'center',
    marginTop: '30px',
  };

  const buttonStyle = {
    padding: '15px 30px',
    fontSize: '16px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    margin: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '1px',
    outline: 'none',
  };

  const chooseFileButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#2196f3',
  };

  const submitButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f44336',
  };

  return (
    <div className="App" style={appStyle}>
      <h1 style={{ marginTop: '230px', fontSize: '60px', fontFamily: 'serif' }}>Crop Detection System</h1>
      <div style={contentStyle}>
        {showSubmit ? (
          <div>
            <input className='file-input' type="file" accept="image/png, image/jpeg, image/jpg" onChange={handleImageUpload} style={{ display: 'none' }} />
            <button style={chooseFileButtonStyle} onClick={() => document.querySelector('.file-input').click()}>Choose File</button>
            <button style={submitButtonStyle} onClick={handlePrediction}>Submit</button>
          </div>
        ) : null}

        {predictionResult && (
          <div className='predict-another'>
            <h2>Result: {predictionResult}</h2>
            <button style={submitButtonStyle} onClick={handlePredictAnother}>Predict Another</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
