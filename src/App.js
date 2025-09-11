import React, { useState } from 'react';
import './App.css';
import { dishes } from './data/mockDishes';
import Filters from './components/Filters';
import DishList from './components/DishList';
import IngredientModal from './components/IngredientModal';

function App() {
  // State management for all app functionality
  const [selectedCategory, setSelectedCategory] = useState('STARTER');
  const [searchTerm, setSearchTerm] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState(null);

  // Available meal categories
  const categories = ['STARTER', 'MAIN COURSE', 'DESSERT', 'SIDES'];

  // Filtering logic
  const filteredDishes = dishes.filter(dish => {
    // Filter by category
    const matchesCategory = dish.mealType === selectedCategory;
    
    // Filter by search term (case insensitive)
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dish.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by vegetarian option
    const matchesVegFilter = !vegOnly || dish.type === 'VEG';
    
    return matchesCategory && matchesSearch && matchesVegFilter;
  });

  // Handle dish selection/deselection
  const toggleDishSelection = (dishId) => {
    setSelectedDishes(prev => {
      if (prev.includes(dishId)) {
        return prev.filter(id => id !== dishId);
      } else {
        return [...prev, dishId];
      }
    });
  };

  // Handle opening ingredient modal
  const openIngredientModal = (dish) => {
    setCurrentDish(dish);
    setIsModalOpen(true);
  };

  // Handle closing ingredient modal
  const closeIngredientModal = () => {
    setIsModalOpen(false);
    setCurrentDish(null);
  };

  // Get selected dishes count
  const selectedCount = selectedDishes.length;

  return (
    <div className="App">
      <header className="app-header">
        <h1>🎉 Party Menu Selection</h1>
        <p>Choose your favorite dishes for the perfect party!</p>
        {selectedCount > 0 && (
          <div className="selected-counter">
            <span className="counter-badge">{selectedCount}</span>
            <span>dishes selected</span>
          </div>
        )}
      </header>

      <main className="app-main">
        <Filters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          vegOnly={vegOnly}
          onVegFilterChange={setVegOnly}
        />

        <DishList
          dishes={filteredDishes}
          selectedDishes={selectedDishes}
          onToggleSelection={toggleDishSelection}
          onShowIngredients={openIngredientModal}
        />

        {filteredDishes.length === 0 && (
          <div className="no-results">
            <h3>No dishes found</h3>
            <p>Try adjusting your filters or search term.</p>
          </div>
        )}
      </main>

      {isModalOpen && currentDish && (
        <IngredientModal
          dish={currentDish}
          onClose={closeIngredientModal}
        />
      )}
    </div>
  );
}

export default App;
