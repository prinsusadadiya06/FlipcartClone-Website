import React, { useState, useEffect } from "react";

const images = [
  "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/1338bd4fc60390d8.jpg?q=60",
    "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/076c4f2ee87225d7.jpg?q=60",
    "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/841cfd128694775a.jpeg?q=60",
    "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/5b309e98775e22e4.jpg?q=60",
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000); // 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mt-4">
      <img src={images[index]} alt="slider" className="w-100 rounded" />
    </div>
  );
};

export default Slider;
