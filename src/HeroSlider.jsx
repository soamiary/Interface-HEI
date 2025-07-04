import { useState, useEffect } from "react";
import bg2 from "./assets/backgroundImage2.jpg";
import bg3 from "./assets/backgroundImage3.jpg";
import bg4 from "./assets/backgroundImage4.jpg";

const images = [bg2, bg3, bg4];

function HeroSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div
      className="h-screen bg-cover bg-center relative transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold text-center">
          Bienvenue à HEI
        </h1>
      </div>
    </div>
  );
}

export default HeroSlider;
