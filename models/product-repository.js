import productData from './product-data.json';
import _ from 'lodash';

export default class ProductRepository {

    findById(id) {
        return _.find(productData, {'id': id});
    }

    fetchAll() {
        return productData;
    }

    save(product) {
        productData.push(product);
        return product;
    }
}