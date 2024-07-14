import React, { useState, useEffect } from 'react';

function ImageCarousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        'images/cash-payment-concept-illustration_114360-3320.avif',
        'public/images/transfer-money-concept-illustration_114360-4165.avif',
        'public/images/3d-hand-making-cashless-payment-from-smartphone_107791-16609.avif',
    ];

    const transitionTime = 4000; // Adjust for desired transition duration (in ms)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, transitionTime);

        return () => clearInterval(intervalId); // Cleanup function to prevent memory leaks
    }, [transitionTime, images.length]); // Dependencies for the effect

    return (
        <div className="image-container">
            <img className='svg'
                src={images[currentImageIndex]}
                alt="Image Description"
                style={{ transition: `opacity ${transitionTime}ms ease-in-out` }}
            />
        </div>
    );
}

export default ImageCarousel;
