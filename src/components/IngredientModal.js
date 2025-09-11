import React, { useEffect } from 'react';

function IngredientModal({ dish, onClose }) {
  // Handle escape key press to close modal
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  // Handle backdrop click to close modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!dish) return null;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content" role="dialog" aria-labelledby="modal-title" aria-modal="true">
        <div className="modal-header">
          <div className="modal-title-section">
            <h2 id="modal-title" className="modal-title">{dish.name}</h2>
            <div className="dish-meta">
              <span className={`type-badge ${dish.type.toLowerCase()}`}>
                {dish.type === 'VEG' ? '🌱' : '🍖'} {dish.type}
              </span>
              <span className="meal-type-badge">{dish.mealType}</span>
            </div>
          </div>
          <button 
            className="close-button"
            onClick={onClose}
            aria-label="Close modal"
            type="button"
          >
            ✕
          </button>
        </div>

        <div className="modal-body">
          <div className="dish-image-section">
            <img 
              src={dish.image} 
              alt={dish.name}
              className="modal-dish-image"
            />
          </div>

          <div className="dish-description-section">
            <h3>Description</h3>
            <p className="dish-description">{dish.description}</p>
          </div>

          <div className="ingredients-section">
            <h3>Ingredients</h3>
            <div className="ingredients-list">
              {dish.ingredients.map((ingredient, index) => (
                <div key={index} className="ingredient-item">
                  <span className="ingredient-name">{ingredient.name}</span>
                  <span className="ingredient-quantity">{ingredient.quantity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button 
            className="close-modal-btn"
            onClick={onClose}
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default IngredientModal;