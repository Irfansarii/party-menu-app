import React from 'react';

function Filters({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  searchTerm, 
  onSearchChange, 
  vegOnly, 
  onVegFilterChange,
  nonVegOnly,
  onNonVegFilterChange,
  getCategoryCount,
  selectedDishes
}) {
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };

  const handleVegFilterChange = () => {
    onVegFilterChange(!vegOnly);
  };

  const handleNonVegFilterChange = () => {
    onNonVegFilterChange(!nonVegOnly);
  };

  const handleCategoryClick = (category) => {
    onCategoryChange(category);
  };

  // Get selected dishes count for a specific category
  const getCategorySelectedCount = (category) => {
    return selectedDishes.filter(dish => dish.mealType === category).length;
  };

  return (
    <div className="filters">
      {/* Search Bar */}
      <div className="search-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search dish for your party...."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <span className="search-icon">🔍</span>

          {searchTerm && (
            <button 
              className="clear-search"
              onClick={() => onSearchChange('')}
              type="button"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="category-tabs">
        <div className="tabs-container">
          {categories.map(category => (
            <button
              key={category}
              className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
              type="button"
            >
              <span className="category-icon">
                {category === 'STARTER'}
                {category === 'MAIN COURSE'}
                {category === 'DESSERT'}
                {category === 'SIDES'}
              </span>
              <span className="category-name">{category}</span>
              <span className="category-count">{getCategorySelectedCount(category)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Category Info and Filters in one line */}
      <div className="category-filters-row">
        <div className="selected-category-info">
          <span className="selected-category-name">{selectedCategory} SELECTED</span>
          <span className="selected-category-count">{getCategorySelectedCount(selectedCategory)}</span>
        </div>
        
        <div className="filter-options-inline">
          <div className="veg-filter" onClick={handleVegFilterChange}>
            <div className={`toggle-slider ${vegOnly ? 'active' : ''}`}>
              <div className="slider-track">
                <div className="slider-thumb"></div>
              </div>
            </div>
            <span className="filter-text">
              Veg
            </span>
          </div>
          
          <div className="veg-filter" onClick={handleNonVegFilterChange}>
            <div className={`toggle-slider non-veg ${nonVegOnly ? 'active' : ''}`}>
              <div className="slider-track">
                <div className="slider-thumb"></div>
              </div>
            </div>
            <span className="filter-text">
              Non-Veg
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;