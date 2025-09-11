import React from 'react';
import DishCard from './DishCard';

function DishList({ dishes, selectedDishes, onToggleSelection, onShowIngredients }) {
  return (
    <div className="dish-list">
      <div className="dish-grid">
        {dishes.map(dish => (
          <DishCard
            key={dish.id}
            dish={dish}
            isSelected={selectedDishes.includes(dish.id)}
            onToggleSelection={onToggleSelection}
            onShowIngredients={onShowIngredients}
          />
        ))}
      </div>
      
      {dishes.length > 0 && (
        <div className="dish-count">
          <p>Showing {dishes.length} dish{dishes.length !== 1 ? 'es' : ''}</p>
        </div>
      )}
    </div>
  );
}

export default DishList;