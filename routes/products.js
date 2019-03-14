import express from 'express';
import ProductRepository from '../models/product-repository';

const router = express.Router();
const repository = new ProductRepository();

router.param('id', (req, res, next, idStr) => {
    console.debug(`Finding product with id ${idStr}...`);
    req.productId = idStr;
    req.product = repository.findById(parseInt(idStr));
    if (req.product === undefined) {
        req.status(404)
            .json({message: `Product with id ${idStr} not found`});
        console.error(`Product with id ${idStr} not found`);
    }
    console.debug(req.product);
    next();
});

router.get('/products', (req, res) => {
    res.status(200)
        .json(repository.fetchAll());
});

router.post('/products', (req, res) => {
    res.status(200)
        .json(repository.save(req.body));
});

router.get('/products/:id', (req, res) => {
    res.status(200).json(req.product);
});

router.get('/products/:id/reviews', (req, res) => {
    res.status(200).json(req.product.reviews);
});


export default router;