// Mock data for Party Menu Selection App
export const dishes = [
  // STARTER - VEG
  {
    "categoryId": 1,
    "mealType": "STARTER",
    "type": "VEG",
    "description": "Marinated paneer cubes grilled to perfection with aromatic spices.",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "APPETIZER",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 1,
    "name": "Paneer Tikka",
    "ingredients": [
      { "name": "Paneer", "quantity": "250g" },
      { "name": "Yogurt", "quantity": "1/2 cup" },
      { "name": "Ginger-Garlic Paste", "quantity": "1 tbsp" },
      { "name": "Red Chili Powder", "quantity": "1 tsp" }
    ]
  },
  {
    "categoryId": 3,
    "mealType": "STARTER",
    "type": "VEG",
    "description": "Crispy rolls filled with fresh vegetables and served with sweet chili sauce.",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 3,
      "name": "Chinese",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "APPETIZER",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 2,
    "name": "Vegetable Spring Rolls",
    "ingredients": [
      { "name": "Cabbage", "quantity": "1 cup" },
      { "name": "Carrots", "quantity": "1/2 cup" },
      { "name": "Spring Roll Sheets", "quantity": "10 pieces" },
      { "name": "Soy Sauce", "quantity": "2 tbsp" }
    ]
  },
  // STARTER - NON-VEG
  {
    "categoryId": 2,
    "mealType": "STARTER",
    "type": "NON-VEG",
    "description": "Spicy buffalo chicken wings with tangy sauce.",
    "image": "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 2,
      "name": "Continental",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/continental.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "APPETIZER",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 3,
    "name": "Chicken Wings",
    "ingredients": [
      { "name": "Chicken Wings", "quantity": "500g" },
      { "name": "Buffalo Sauce", "quantity": "1/4 cup" },
      { "name": "Garlic Powder", "quantity": "1 tsp" },
      { "name": "Paprika", "quantity": "1 tsp" }
    ]
  },
  {
    "categoryId": 2,
    "mealType": "STARTER",
    "type": "NON-VEG",
    "description": "Crispy battered fish strips served with tartar sauce.",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 2,
      "name": "Continental",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/continental.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "APPETIZER",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 4,
    "name": "Fish Fingers",
    "ingredients": [
      { "name": "Fish Fillets", "quantity": "300g" },
      { "name": "Breadcrumbs", "quantity": "1 cup" },
      { "name": "Eggs", "quantity": "2 pieces" },
      { "name": "All Purpose Flour", "quantity": "1/2 cup" }
    ]
  },
  // MAIN COURSE - VEG
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 5,
    "name": "Kadhai Paneer",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onion", "quantity": "2 large" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Tomato Puree", "quantity": "1 cup" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Rich and creamy black lentils cooked with butter and cream.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 6,
    "name": "Dal Makhani",
    "ingredients": [
      { "name": "Black Lentils", "quantity": "1 cup" },
      { "name": "Butter", "quantity": "3 tbsp" },
      { "name": "Heavy Cream", "quantity": "1/4 cup" },
      { "name": "Ginger-Garlic Paste", "quantity": "1 tbsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Fragrant basmati rice cooked with mixed vegetables and aromatic spices.",
    "image": "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "RICE",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 7,
    "name": "Vegetable Biryani",
    "ingredients": [
      { "name": "Basmati Rice", "quantity": "2 cups" },
      { "name": "Mixed Vegetables", "quantity": "2 cups" },
      { "name": "Biryani Masala", "quantity": "2 tbsp" },
      { "name": "Saffron", "quantity": "1/4 tsp" }
    ]
  },
  // MAIN COURSE - NON-VEG
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "NON-VEG",
    "description": "Tender chicken in rich tomato-based creamy sauce.",
    "image": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 8,
    "name": "Butter Chicken",
    "ingredients": [
      { "name": "Chicken", "quantity": "500g" },
      { "name": "Tomato Puree", "quantity": "1 cup" },
      { "name": "Heavy Cream", "quantity": "1/2 cup" },
      { "name": "Butter", "quantity": "3 tbsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "NON-VEG",
    "description": "Aromatic basmati rice layered with spiced chicken and cooked to perfection.",
    "image": "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "RICE",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 9,
    "name": "Chicken Biryani",
    "ingredients": [
      { "name": "Chicken", "quantity": "500g" },
      { "name": "Basmati Rice", "quantity": "2 cups" },
      { "name": "Biryani Masala", "quantity": "3 tbsp" },
      { "name": "Fried Onions", "quantity": "1/2 cup" }
    ]
  },
  {
    "categoryId": 4,
    "mealType": "MAIN COURSE",
    "type": "NON-VEG",
    "description": "Fresh fish cooked in coconut-based spicy curry.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 4,
      "name": "South Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 10,
    "name": "Fish Curry",
    "ingredients": [
      { "name": "Fish", "quantity": "400g" },
      { "name": "Coconut Milk", "quantity": "1 cup" },
      { "name": "Curry Leaves", "quantity": "10 pieces" },
      { "name": "Tamarind Paste", "quantity": "1 tbsp" }
    ]
  },
  // DESSERT
  {
    "categoryId": 5,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Soft milk dumplings soaked in rose-flavored sugar syrup.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 5,
      "name": "Indian Sweets",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/sweets.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "SWEET",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 11,
    "name": "Gulab Jamun",
    "ingredients": [
      { "name": "Milk Powder", "quantity": "1 cup" },
      { "name": "All Purpose Flour", "quantity": "2 tbsp" },
      { "name": "Sugar", "quantity": "2 cups" },
      { "name": "Rose Water", "quantity": "1 tsp" }
    ]
  },
  {
    "categoryId": 2,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Rich and fudgy chocolate brownies with nuts.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 2,
      "name": "Continental",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/continental.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "SWEET",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 12,
    "name": "Chocolate Brownie",
    "ingredients": [
      { "name": "Dark Chocolate", "quantity": "200g" },
      { "name": "Butter", "quantity": "100g" },
      { "name": "Sugar", "quantity": "1 cup" },
      { "name": "Eggs", "quantity": "2 pieces" }
    ]
  },
  {
    "categoryId": 5,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Traditional Indian ice cream with cardamom and pistachios.",
    "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 5,
      "name": "Indian Sweets",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/sweets.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "SWEET",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 13,
    "name": "Kulfi",
    "ingredients": [
      { "name": "Full Fat Milk", "quantity": "1 liter" },
      { "name": "Sugar", "quantity": "1/2 cup" },
      { "name": "Cardamom Powder", "quantity": "1/2 tsp" },
      { "name": "Pistachios", "quantity": "1/4 cup" }
    ]
  },
  // SIDES
  {
    "categoryId": 1,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Soft and fluffy Indian bread baked in tandoor.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "BREAD",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 14,
    "name": "Naan",
    "ingredients": [
      { "name": "All Purpose Flour", "quantity": "2 cups" },
      { "name": "Yogurt", "quantity": "1/4 cup" },
      { "name": "Baking Powder", "quantity": "1/2 tsp" },
      { "name": "Salt", "quantity": "1 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Fragrant basmati rice cooked with cumin seeds.",
    "image": "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "RICE",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 15,
    "name": "Jeera Rice",
    "ingredients": [
      { "name": "Basmati Rice", "quantity": "1 cup" },
      { "name": "Cumin Seeds", "quantity": "1 tsp" },
      { "name": "Bay Leaves", "quantity": "2 pieces" },
      { "name": "Ghee", "quantity": "2 tbsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Refreshing yogurt-based side dish with cucumber and onions.",
    "image": "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "SALAD",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 16,
    "name": "Mixed Raita",
    "ingredients": [
      { "name": "Yogurt", "quantity": "1 cup" },
      { "name": "Cucumber", "quantity": "1 medium" },
      { "name": "Onion", "quantity": "1 small" },
      { "name": "Chaat Masala", "quantity": "1/2 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 17,
    "name": "Kadhai Paneer 9",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onions", "quantity": "2 medium" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Kadhai Masala", "quantity": "2 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 18,
    "name": "Kadhai Paneer 10",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onions", "quantity": "2 medium" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Kadhai Masala", "quantity": "2 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 19,
    "name": "Kadhai Paneer 11",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onions", "quantity": "2 medium" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Kadhai Masala", "quantity": "2 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 20,
    "name": "Kadhai Paneer 12",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onions", "quantity": "2 medium" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Kadhai Masala", "quantity": "2 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 21,
    "name": "Kadhai Paneer 13",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onions", "quantity": "2 medium" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Kadhai Masala", "quantity": "2 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 22,
    "name": "Kadhai Paneer 14",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onions", "quantity": "2 medium" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Kadhai Masala", "quantity": "2 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 23,
    "name": "Kadhai Paneer 15",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onions", "quantity": "2 medium" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Kadhai Masala", "quantity": "2 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 24,
    "name": "Kadhai Paneer 16",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onions", "quantity": "2 medium" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Kadhai Masala", "quantity": "2 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 25,
    "name": "Kadhai Paneer 17",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onions", "quantity": "2 medium" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Kadhai Masala", "quantity": "2 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 26,
    "name": "Kadhai Paneer 18",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onions", "quantity": "2 medium" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Kadhai Masala", "quantity": "2 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 27,
    "name": "Kadhai Paneer 19",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onions", "quantity": "2 medium" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Kadhai Masala", "quantity": "2 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 28,
    "name": "Kadhai Paneer 20",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onions", "quantity": "2 medium" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Kadhai Masala", "quantity": "2 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 29,
    "name": "Kadhai Paneer 21",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onions", "quantity": "2 medium" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Kadhai Masala", "quantity": "2 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 30,
    "name": "Kadhai Paneer 22",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onions", "quantity": "2 medium" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Kadhai Masala", "quantity": "2 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 31,
    "name": "Kadhai Paneer 23",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onions", "quantity": "2 medium" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Kadhai Masala", "quantity": "2 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 32,
    "name": "Kadhai Paneer 24",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onions", "quantity": "2 medium" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Kadhai Masala", "quantity": "2 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 33,
    "name": "Kadhai Paneer 25",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onions", "quantity": "2 medium" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Kadhai Masala", "quantity": "2 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 34,
    "name": "Kadhai Paneer 26",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onions", "quantity": "2 medium" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Kadhai Masala", "quantity": "2 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 35,
    "name": "Kadhai Paneer 27",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onions", "quantity": "2 medium" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Kadhai Masala", "quantity": "2 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 36,
    "name": "Kadhai Paneer 28",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onions", "quantity": "2 medium" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Kadhai Masala", "quantity": "2 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 37,
    "name": "Kadhai Paneer 29",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onions", "quantity": "2 medium" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Kadhai Masala", "quantity": "2 tsp" }
    ]
  },
  {
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "nameHi": "",
    "nameBn": "",
    "id": 38,
    "name": "Kadhai Paneer 30",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onions", "quantity": "2 medium" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Kadhai Masala", "quantity": "2 tsp" }
    ]
  }
];