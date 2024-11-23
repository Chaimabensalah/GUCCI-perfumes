import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import { explore1Img, explore2Img, explore3Img, explore4Img, explore5Img, explore6Img, explore7Img, explore8Img } from '../utils'; // Replace with your actual product image imports
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap('#features_title', { y: 0, opacity: 1 });
    animateWithGsap('.g_grow', { scale: 1, opacity: 1, ease: 'power1' }, { scrub: 5.5 });
    animateWithGsap('.g_text', { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 });
  }, []);

  const products1 = [
    { img: explore6Img, name: 'Product 6', price: '$39.99' },
    { img: explore4Img, name: 'Product 4', price: '$59.99' },
    { img: explore2Img, name: 'Product 2', price: '$39.99' },
    { img: explore8Img, name: 'Product 8', price: '$59.99' },

  ];

  const products2 = [
    { img: explore5Img, name: 'Product 5', price: '$29.99' },
    { img: explore3Img, name: 'Product 3', price: '$49.99' },
    { img: explore7Img, name: 'Product 7', price: '$49.99' },
    { img: explore1Img, name: 'Product 1', price: '$29.99' },


  ];

  return (
    <section className="h-full common-padding bg-black relative overflow-hidden">
      <div className="screen-max-width">
        {/* Section Title */}
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">Explore Products</h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products1.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
              <div className="mt-4 text-center">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Products */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {products2.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
              <div className="mt-4 text-center">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Description */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-400">
            Discover more about our collection of exclusive products crafted for your style and comfort.
          </p>
        </div>

        {/* "More" Button */}
        <div className="mt-8 flex justify-center">
          <button
            className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
            onClick={() => {
              // Action to load more products or navigate to another page
              console.log('More button clicked!');
            }}
          >
            More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
