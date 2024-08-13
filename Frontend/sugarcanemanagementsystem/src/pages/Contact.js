import React, { useState } from 'react';
import './pageCSS/carousel.css'; // Make sure to create this CSS file

const data = [
  { name: 'Mohit Kumar Gupta', img: '/projectFriends/mohit.jpg', review: 'PG-DAC' },
  { name: 'Akash Bhosale', img: '/projectFriends/akash.jpg', review: 'PG-DAC' },
  { name: 'Vishal Nalawade', img: '/projectFriends/vishal.jpg', review: 'PG-DAC' },
  { name: 'Deepak Yadav', img: '/projectFriends/deepak.jpg', review: 'PG-DAC' },
  { name: 'Akanksha Nandanwar', img: '/projectFriends/akanksha.jpg', review: 'PG-DAC' },
  { name: 'Vaishnavi', img: '/projectFriends/vaishnavi.jpg', review: 'PG-DAC' }
];

function Contact() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className='carousel-container'>
      <button className='carousel-button prev' onClick={prevSlide}>‹</button>
      <div className='carousel-slide'>
        <div className='carousel-card'>
          <img src={data[currentIndex].img} alt={data[currentIndex].name} className='carousel-image' />
          <div className='carousel-content'>
            <p className='carousel-name'>{data[currentIndex].name}</p>
            <p className='carousel-review'>{data[currentIndex].review}</p>
          </div>
        </div>
      </div>
      <button className='carousel-button next' onClick={nextSlide}>›</button>
    </div>
  );
}

export default Contact;
