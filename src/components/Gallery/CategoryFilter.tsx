
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

  const handleCategoryClick = (category: Category) => {
    if (activeCategory !== category) {
      setActiveCategory(category);
    }
  };

  return (
    <div
      ref={ref}
      className={`flex justify-center mb-12 ${inView ? 'fade-in' : ''}`}
    >
      <div className="inline-flex border-b border-dark overflow-x-auto pb-1 max-w-full">
        <button
          className={`px-4 py-2 font-inter uppercase text-sm whitespace-nowrap ${activeCategory === 'all' ? 'border-b-2 border-dark' : ''}`}
          onClick={() => handleCategoryClick('all')}
          type="button"
        >
          Toutes
        </button>
        <button
          className={`px-4 py-2 font-inter uppercase text-sm whitespace-nowrap ${activeCategory === 'portrait' ? 'border-b-2 border-dark' : ''}`}
          onClick={() => handleCategoryClick('portrait')}
          type="button"
        >
          Portraits
        </button>
        <button
          className={`px-4 py-2 font-inter uppercase text-sm whitespace-nowrap ${activeCategory === 'nature-morte' ? 'border-b-2 border-dark' : ''}`}
          onClick={() => handleCategoryClick('nature-morte')}
          type="button"
        >
          Nature Morte
        </button>
        <button
          className={`px-4 py-2 font-inter uppercase text-sm whitespace-nowrap ${activeCategory === 'paysage' ? 'border-b-2 border-dark' : ''}`}
          onClick={() => handleCategoryClick('paysage')}
          type="button"
        >
          Paysages
        </button>
      </div>
    </div>
  );
};

export default CategoryFilter;
