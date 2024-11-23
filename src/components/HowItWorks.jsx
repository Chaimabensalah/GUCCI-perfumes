import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { chipImg } from '../utils'; // Ensure the correct path to chip.png

const HowItWorks = () => {
  const chipRef = useRef();

  useEffect(() => {
    // Animation for the chip image
    gsap.fromTo(
      chipRef.current,
      {
        opacity: 0,
        y: 20, // Smaller vertical movement
        scale: 0.8, // Start closer to the final size
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1, // Shorter animation duration
        ease: 'power2.out',
        scrollTrigger: {
          trigger: chipRef.current,
          start: '20% bottom', // Start animation when the image is 20% in the viewport
        },
      }
    );
  }, []);

  return (
    <section className="common-padding flex justify-center items-center h-full bg-black">
      <div className="screen-max-width text-center">
        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg mt-2">
          Every Gucci fragrance is a masterpiece, blending rare ingredients and bold imagination to create a symphony of luxury and individuality. Step into a world where scent becomes art, and every spray tells your story.          </p>
        </div>


        {/* Animated Chip Image */}
        <div className="flex justify-center items-center my-20">
          <img
            ref={chipRef}
            src={chipImg}
            alt="Chip"
            className="w-auto h-auto object-contain rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
