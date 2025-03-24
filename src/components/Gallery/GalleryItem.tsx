
import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Artwork } from '@/types/artwork';

interface GalleryItemProps {
  artwork: Artwork;
  index: number;
}

const GalleryItem = ({ artwork, index }: GalleryItemProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 100 * index, // Délai progressif pour créer un effet de cascade
  });

  // Format du prix en euros
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price / 100);
  };

  return (
    <div
      key={artwork.id}
      ref={ref}
      className={`transition-all duration-500 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <Link to={`/aquarelles/${artwork.id}`} className="group block">
        <div className="overflow-hidden">
          <img
            src={artwork.image_url}
            alt={artwork.title}
            className="w-full h-64 object-cover transition-transform duration-800 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="pt-3">
          <h3 className="font-cormorant text-lg font-medium">{artwork.title}</h3>
          <p className="font-inter text-sm text-gray mt-1">
            {artwork.dimensions} {artwork.year}<br />
            {artwork.technique}
          </p>
          <p className="font-inter text-sm font-medium mt-2">
            {artwork.sold ? (
              <span className="text-red-500">Vendu</span>
            ) : (
              <span>{formatPrice(artwork.price)}</span>
            )}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default GalleryItem;
