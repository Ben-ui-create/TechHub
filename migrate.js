import Users from './models/Users.js';
import Categories from './models/Categories.js';
import Brands from './models/Brands.js';
import Products from './models/Products.js';
import ProductImages from './models/ProductImages.js';
import ProductStores from './models/ProductStores.js';
import Stores from './models/Stores.js';
import Specifications from './models/Specifications.js';
import Comparison from './models/Comparison.js';
import Favorites from './models/Favorites.js';
import Carts from './models/Carts.js';
import CartItems from './models/CartItems.js';
import Orders from './models/Orders.js';
import OrderItems from './models/OrderItems.js';
import Reviews from './models/Reviews.js';

;(async () => {
  console.log('Running Migration');

  const models = [Users,
    Categories,
    Brands,
    Products,
    ProductImages,
    ProductStores,
    Stores,
    Specifications,
    Comparison,
    Favorites,
    Carts,
    CartItems,
    Orders,
    OrderItems,
    Reviews,
  ];

  for (const model of models) {
    try {
      console.log('model -> ', model);
      await model.sync({alter: true});
    } catch (e) {
      console.error(e);
    }
  }
})();