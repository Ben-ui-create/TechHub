import Users from './Users.js';
import Categories from './Categories.js';
import Brands from './Brands.js';
import Products from './Products.js';
import ProductImages from './ProductImages.js';
import ProductStores from './ProductStores.js';
import Stores from './Stores.js';
import Specifications from './Specifications.js';
import Comparison from './Comparison.js';
import Favorites from './Favorites.js';
import Carts from './Carts.js';
import CartItems from './CartItems.js';
import Orders from './Orders.js';
import OrderItems from './OrderItems.js';
import Reviews from './Reviews.js';

Categories.hasMany(Products, {
  foreignKey: 'categoryId',
  as: 'products',
});

Products.belongsTo(Categories, {
  foreignKey: 'categoryId',
  as: 'category',
});

Brands.hasMany(Products, {
  foreignKey: 'brandId',
  as: 'products',
});

Products.belongsTo(Brands, {
  foreignKey: 'brandId',
  as: 'brand',
});

Products.hasMany(ProductImages, {
  foreignKey: 'productId',
  as: 'images',
});

ProductImages.belongsTo(Products, {
  foreignKey: 'productId',
  as: 'product',
});

Products.hasOne(Specifications, {
  foreignKey: 'productId',
  as: 'specification',
});

Specifications.belongsTo(Products, {
  foreignKey: 'productId',
  as: 'product',
});

Products.belongsToMany(Stores, {
  through: ProductStores,
  foreignKey: 'productId',
  otherKey: 'storeId',
  as: 'stores',
});

Stores.belongsToMany(Products, {
  through: ProductStores,
  foreignKey: 'storeId',
  otherKey: 'productId',
  as: 'products',
});

Products.hasMany(ProductStores, {
  foreignKey: 'productId',
  as: 'prices',
});

ProductStores.belongsTo(Products, {
  foreignKey: 'productId',
  as: 'product',
});

Stores.hasMany(ProductStores, {
  foreignKey: 'storeId',
  as: 'prices',
});

ProductStores.belongsTo(Stores, {
  foreignKey: 'storeId',
  as: 'store',
});

Users.hasMany(Favorites, {
  foreignKey: 'userId',
  as: 'favorites',
});

Favorites.belongsTo(Users, {
  foreignKey: 'userId',
  as: 'user',
});

Products.hasMany(Favorites, {
  foreignKey: 'productId',
  as: 'favorites',
});

Favorites.belongsTo(Products, {
  foreignKey: 'productId',
  as: 'product',
});

Users.hasMany(Comparison, {
  foreignKey: 'userId',
  as: 'comparison',
});

Comparison.belongsTo(Users, {
  foreignKey: 'userId',
  as: 'user',
});

Products.hasMany(Comparison, {
  foreignKey: 'productId',
  as: 'comparison',
});

Comparison.belongsTo(Products, {
  foreignKey: 'productId',
  as: 'product',
});

Users.hasOne(Carts, {
  foreignKey: 'userId',
  as: 'cart',
});

Carts.belongsTo(Users, {
  foreignKey: 'userId',
  as: 'user',
});

Carts.hasMany(CartItems, {
  foreignKey: 'cartId',
  as: 'items',
});

CartItems.belongsTo(Carts, {
  foreignKey: 'cartId',
  as: 'cart',
});

Products.hasMany(CartItems, {
  foreignKey: 'productId',
  as: 'cartItems'
});

CartItems.belongsTo(Products, {
  foreignKey: 'productId',
  as: 'product',
});

Users.hasMany(Orders, {
  foreignKey: 'userId',
  as: 'orders',
});

Orders.belongsTo(Users, {
  foreignKey: 'userId',
  as: 'user',
});

Orders.hasMany(OrderItems, {
  foreignKey: 'orderId',
  as: 'items',
});

OrderItems.belongsTo(Orders, {
  foreignKey: 'orderId',
  as: 'order',
});

Products.hasMany(OrderItems, {
  foreignKey: 'productId',
  as: 'orderItems',
});

OrderItems.belongsTo(Products, {
  foreignKey: 'productId',
  as: 'product',
});

Users.hasMany(Reviews, {
  foreignKey: 'userId',
  as: 'reviews',
});

Reviews.belongsTo(Users, {
  foreignKey: 'userId',
  as: 'user',
});

Products.hasMany(Reviews, {
  foreignKey: 'productId',
  as: 'reviews',
});

Reviews.belongsTo(Products, {
  foreignKey: 'productId',
  as: 'product',
});

