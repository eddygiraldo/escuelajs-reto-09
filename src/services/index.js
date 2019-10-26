const MongoLib = require('../lib/mongo');

class ProductService {
  constructor() {
    this.collection = 'products';
    this.mongoDB = new MongoLib();
  }

  async getProducts(tags) {
    const query = tags && { tags: { $in: tags } };
    const products = await this.mongoDB.getAll(this.collection, tags);
    return products || [];
  }

  async createProduct(product) {
    const createdProductId = await this.mongoDB.create(this.collection, product);
    return createdProductId;
  }
}

module.exports = ProductService;
