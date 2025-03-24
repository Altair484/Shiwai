
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Artwork } from '@/types/artwork';
import { Skeleton } from '@/components/ui/skeleton';

interface GalleryItemProps {
  artwork: Artwork;
  index: number;
}

const GalleryItem = ({ artwork, index }: GalleryItemProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 100 * Math.min(index, 5), // Cap the delay to prevent too much delay for later items
  });

  // Format price in euros
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price / 100);
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <Link to={`/aquarelles/${artwork.id}`} className="group block">
        <div className="overflow-hidden relative h-64">
          {!imageLoaded && <Skeleton className="w-full h-64 absolute top-0 left-0" />}
          {inView && (
            <img
              src={artwork.image_url}
              alt={artwork.title}
              className={`w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
            />
          )}
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
