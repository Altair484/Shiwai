
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Category } from '@/types/artwork';

interface CategoryFilterProps {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}

const CategoryFilter = ({ activeCategory, setActiveCategory }: CategoryFilterProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`flex justify-center mb-12 ${inView ? 'fade-in' : ''}`}
    >
      <div className="inline-flex border-b border-dark">
        <button
          className={`px-4 py-2 font-inter uppercase text-sm ${activeCategory === 'all' ? 'border-b-2 border-dark' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          Toutes
        </button>
        <button
          className={`px-4 py-2 font-inter uppercase text-sm ${activeCategory === 'portrait' ? 'border-b-2 border-dark' : ''}`}
          onClick={() => setActiveCategory('portrait')}
        >
          Portraits
        </button>
        <button
          className={`px-4 py-2 font-inter uppercase text-sm ${activeCategory === 'nature-morte' ? 'border-b-2 border-dark' : ''}`}
          onClick={() => setActiveCategory('nature-morte')}
        >
          Nature Morte
        </button>
        <button
          className={`px-4 py-2 font-inter uppercase text-sm ${activeCategory === 'paysage' ? 'border-b-2 border-dark' : ''}`}
          onClick={() => setActiveCategory('paysage')}
        >
          Paysages
        </button>
      </div>
    </div>
  );
};

export default CategoryFilter;
