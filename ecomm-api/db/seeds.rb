# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Product.create([
  {name: "Product 1", price: 7, description: "The first product!", instock: true}, {name: "Product 2", price: 12, description: "The second product!", instock: true}, {name: "Item 3", price: 1000, description: "The last product!", instock: false}
  ])