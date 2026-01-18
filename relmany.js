// ONE TO MANY
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relation_db')
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log(err);
    });

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['spring', 'summer', 'fall', 'winter']
    }
})

const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

const Product = mongoose.model('Product', productSchema);

const Farm = mongoose.model('Farm', farmSchema);


/* INSERT DATA PRODUCT
Product.insertMany([
    {
        name: 'Mellon',
        price: 9,
        season: 'summer'
    },
    {
        name: 'Watermellon',
        price: 12,
        season: 'summer'
    },
    {
        name: 'Kiwi',
        price: 5,
        season: 'summer'
    }
]) */


/* MENAMBAHKAN DATA MELON KE FARM
const makeFarm = async () => {
    const farm = new Farm({
        name: 'Farm',
        city: 'Anonym'
    })
    const melon = await Product.findOne({name: 'Mellon'});
    farm.products.push(melon)
    await farm.save()
    console.log(farm)
}

makeFarm() */   


/* MENAMBAHKAN DATA PRODUCT LAGI KE FARM SETELAH DATA MELON
const addProduct = async (id) => {
    const farm = await Farm.findById(id)
    const Watermellon = await Product.findOne({ name: 'Watermellon'})
    farm.products.push(Watermellon)
    await farm.save()
    console.log(farm)
}

addProduct('696c6bb384c1195bfe80e21c') */


/* MENAMPILKAN DATA PRODUCTS
Farm.findOne({name : 'Farm'}).populate('products').then((farm) => {
    console.log(farm);
}); */