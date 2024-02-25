// App.js
import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('/Images/images.json');
      if (!response.ok) {
        throw new Error('Failed to fetch images. Status:', response.status);
      }
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div className="App">
      <div className='doctor'><h2>Select Doctor</h2></div>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="doctor-card">
            <img src={image.image} alt={`Doctor ${index}`} />
            <div className="doctor-details">
              <div className="doctor-name">{image.name}</div>
              <div className="doctor-specialty">{image.specialty}</div>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default App;
