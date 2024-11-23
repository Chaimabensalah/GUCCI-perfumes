import React from 'react';
import { footerLinks } from '../constants';
import { explore1, explore2, explore3, explore4 } from '../utils'; // Replace with your actual product image imports

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop: {' '}
            <span className="underline text-blue">
              Find an GUCCI Store {' '}
            </span>
            or {' '}
            <span className="underline text-blue">
              other retailer
            </span>{' '}
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 500 222 568
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

{/* Collaboration Logos Section */}
<div className="py-5">

  {/* Logos */}
  <div className="flex flex-wrap justify-center items-center gap-5">
    {/* Title */}
    <h2 className="text-center text-lg md:text-xl font-semibold text-gray-400 mb-4">
    Our Trusted Collaborators :
  </h2>
    <img src={explore1} alt="Collaboration 1" className="w-24 h-auto object-contain" />
    <img src={explore2} alt="Collaboration 2" className="w-24 h-auto object-contain" />
    <img src={explore3} alt="Collaboration 3" className="w-24 h-auto object-contain" />
    <img src={explore4} alt="Collaboration 4" className="w-20 h-auto object-contain" />
  </div>
</div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copyright @ 2024 GUCCI Inc. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
