import React from 'react';

function Filters({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  searchTerm, 
  onSearchChange, 
  vegOnly, 
  onVegFilterChange 
}) {
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };

  const handleVegFilterChange = (e) => {
    onVegFilterChange(e.target.checked);
  };

  const handleCategoryClick = (category) => {
    onCategoryChange(category);
  };

  return (
    <div className="filters">
      {/* Search Bar */}
      <div className="search-section">
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search dishes..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
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
                {category === 'STARTER' && '🥗'}
                {category === 'MAIN COURSE' && '🍛'}
                {category === 'DESSERT' && '🍰'}
                {category === 'SIDES' && '🍚'}
              </span>
              <span className="category-name">{category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Vegetarian Filter */}
      <div className="filter-options">
        <div className="veg-filter">
          <label className="veg-filter-label">
            <input
              type="checkbox"
              checked={vegOnly}
              onChange={handleVegFilterChange}
              className="veg-checkbox"
            />
            <span className="checkbox-custom"></span>
            <span className="filter-text">
              <span className="veg-icon">🌱</span>
              Vegetarian Only
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filters;