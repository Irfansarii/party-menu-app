import React from 'react';

function DishCard({ dish, isSelected, onToggleSelection, onShowIngredients }) {
  const handleSelectionToggle = () => {
    onToggleSelection(dish.id);
  };

  const handleShowIngredients = () => {
    onShowIngredients(dish);
  };

  return (
    <div className={`dish-card-new ${isSelected ? 'selected' : ''}`}>
      <div className="dish-info">
        <div className="dish-header-new">
          <h3 className="dish-name-new">{dish.name}</h3>
          <div className="dish-type-indicator">
            <span className={`type-badge-new ${dish.type.toLowerCase()}`}>
              {dish.type === 'VEG' ? '🟢' : '🔴'}
            </span>
          </div>
        </div>
        
        <p className="dish-description-new">
          {dish.description.length > 80 ? `${dish.description.substring(0, 80)}...` : dish.description}
          {dish.description.length > 80 && (
            <span className="read-more"> Read more</span>
          )}
        </p>
        
        <div className="dish-actions-new">
          <button 
            className="ingredients-btn-new"
            onClick={handleShowIngredients}
            type="button"
          >
            🧄 Ingredient
          </button>
        </div>
      </div>
      
      <div className="dish-image-section">
        <img 
          src={dish.image} 
          alt={dish.name}
          className="dish-image-new"
          loading="lazy"
        />
        <button 
          className={`add-btn-new ${isSelected ? 'selected' : ''}`}
          onClick={handleSelectionToggle}
          type="button"
        >
          {isSelected ? '−' : 'Add +'}
        </button>
      </div>
    </div>
  );
}

export default DishCard;