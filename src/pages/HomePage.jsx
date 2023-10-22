import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-4 px-5 py-20 flex flex-wrap items-center">
      <div className="w-70 pr-10"> {/* Adjust the width and right padding as needed */}
        <h1>Welcome to Bro's Hot Chicken!</h1>
        <br></br>
        <h3>
          Where we bring the fiery spirit of Nashville's famous hot chicken sandwich right to your plate!
        </h3>
      </div>
      <div className="w-30"> {/* Set the width to 30% */}
        <img
          src="https://res.cloudinary.com/delscyuhi/image/upload/v1697993599/BHC/usmsrzlwsigrh5lyy90y.png"
          alt="Chicken-Sandwich"
          style={{ maxWidth: '50%' }} // Ensure the image resizes to fit the container
        />
      </div>
    </div>
  );
};

export default HomePage;
