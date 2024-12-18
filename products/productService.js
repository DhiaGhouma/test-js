var products = require('../products.json')

async function list(req,res,next){
    res.json(products)
}
function ProductsById(req, res, next) {
    const id = req.params.id
    res.json(products[id]);
}
function prouctPrice(req, res, next) {
    const id = req.params.id;
    const qt = parseInt(req.params.qt, 10);
    const product = products[id];

    if (product) {
        if (qt > 0) {
            const totalPrice = qt * product.price;
            res.json({ 
                product: product.name, 
                quantity: qt, 
                total_price: totalPrice 
            });
        } else {
            res.status(400).json({ error: "Invalid quantity" });
        }
    } else {
        res.status(404).json({ error: "Product not found" });
    }

}

module.exports = {list, ProductsById, prouctPrice}