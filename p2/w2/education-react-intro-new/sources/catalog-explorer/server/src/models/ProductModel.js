const products = [
  {
    id: 1,
    title: 'Mechanical Keyboard Keychron K2',
    price: 89.99,
    category: 'electronics',
    description: 'Wireless mechanical keyboard dengan tactile switch.',
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    stock: 15,
  },
  {
    id: 2,
    title: 'Minimalist Cotton T-Shirt',
    price: 24.5,
    category: "men's clothing",
    description: 'Kaos katun combed 30s nyaman untuk sehari-hari.',
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    stock: 40,
  },
];

export default class ProductModel {
  static async findAll(category) {
    if (category && category !== 'all') {
      return products.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase(),
      );
    }

    return products;
  }

  static async findById(id) {
    return products.find((item) => item.id === Number(id)) || null;
  }

  static async create(newProductData) {
    const newProduct = {
      id: products.length > 0 ? products.at(-1).id + 1 : 1,
      ...newProductData,
    };

    products.push(newProduct);
    return newProduct;
  }
}
