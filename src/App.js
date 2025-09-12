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
  const [nonVegOnly, setNonVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState(null);

  // Available meal categories
  const categories = ['STARTER', 'MAIN COURSE', 'DESSERT', 'SIDES'];

  // Function to get count of dishes in each category
  const getCategoryCount = (category) => {
    return dishes.filter(dish => {
      const matchesCategory = dish.mealType === category;
      const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           dish.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      let matchesVegFilter = true;
      if (vegOnly && nonVegOnly) {
        matchesVegFilter = true;
      } else if (vegOnly) {
        matchesVegFilter = dish.type === 'VEG';
      } else if (nonVegOnly) {
        matchesVegFilter = dish.type === 'NON-VEG';
      }
      
      return matchesCategory && matchesSearch && matchesVegFilter;
    }).length;
  };

  // Filtering logic
  const filteredDishes = dishes.filter(dish => {
    // Filter by category
    const matchesCategory = dish.mealType === selectedCategory;
    
    // Filter by search term (case insensitive)
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dish.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by vegetarian/non-vegetarian option
    let matchesVegFilter = true;
    if (vegOnly && nonVegOnly) {
      // If both are selected, show all dishes
      matchesVegFilter = true;
    } else if (vegOnly) {
      // Only veg dishes
      matchesVegFilter = dish.type === 'VEG';
    } else if (nonVegOnly) {
      // Only non-veg dishes
      matchesVegFilter = dish.type === 'NON-VEG';
    }
    // If neither is selected, show all dishes
    
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
          nonVegOnly={nonVegOnly}
          onNonVegFilterChange={setNonVegOnly}
          getCategoryCount={getCategoryCount}
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
