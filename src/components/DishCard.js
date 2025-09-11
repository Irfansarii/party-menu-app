import React from 'react';

function DishCard({ dish, isSelected, onToggleSelection, onShowIngredients }) {
  const handleSelectionToggle = () => {
    onToggleSelection(dish.id);
  };

  const handleShowIngredients = () => {
    onShowIngredients(dish);
  };

  return (
    <div className={`dish-card ${isSelected ? 'selected' : ''}`}>
      <div className="dish-image-container">
        <img 
          src={dish.image} 
          alt={dish.name}
          className="dish-image"
          loading="lazy"
        />
        <div className="dish-type-badge">
          <span className={`type-indicator ${dish.type.toLowerCase()}`}>
            {dish.type === 'VEG' ? '🌱' : '🍖'}
          </span>
          <span className="type-text">{dish.type}</span>
        </div>
      </div>
      
      <div className="dish-content">
        <div className="dish-header">
          <h3 className="dish-name">{dish.name}</h3>
          <span className="meal-type-tag">{dish.mealType}</span>
        </div>
        
        <p className="dish-description">{dish.description}</p>
        
        <div className="dish-actions">
          <button 
            className="ingredients-btn"
            onClick={handleShowIngredients}
            type="button"
          >
            📋 View Ingredients
          </button>
          
          <button 
            className={`selection-btn ${isSelected ? 'selected' : ''}`}
            onClick={handleSelectionToggle}
            type="button"
          >
            {isSelected ? (
              <>
                <span className="check-icon">✓</span>
                Selected
              </>
            ) : (
              <>
                <span className="plus-icon">+</span>
                Add to Menu
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DishCard;