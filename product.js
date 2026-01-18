const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shop_app')
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log(err);
    });

const productsSchema = mongoose.Schema({
		name: {
            type: String,
            required: true
        },
		brand : {
            type: String,
            required: true
        },
		price: {
            type: Number,
            min: 0,
            required: true
        },
		color: {
            type: String,
            required: true
        },
		size: [{
            type: String,
            required: true
        }],
		description: {
            type: String,
            maxLength: 150,
            required: true
        },
        condition: {
            type: String,
            enum: ['baru', 'bekas'],
            default: 'baru'
        },
		stock : {
            type: Number,
            // custom validation
            min: [0, 'Nilai stock ga boleh < 0'],
            required: true
        },
		availability: {
            online: {
                type: Boolean,
                required: true
            },
            offline: {
                type: Boolean,
                required: true
            }
        },
});

// (METHOD)
productsSchema.methods.outStock = function() {
    this.stock = 0
    this.availability.online = false
    this.availability.offline = false
    return this.save()
}

// (STATIC) MERUBAH SEMUA STOK DAN AVAILABILITY 
productsSchema.statics.zeroStock = function() {
    return this.updateMany({}, {
        stock: 0,
        "availability.online" : false,
        "availability.offline" : false
    })
}

const Product = mongoose.model('Product', productsSchema);

const changeStock = async (id) => {
    const foundProduct = await Product.findById(id)
    await foundProduct.outStock();
    console.log('Berhasil diubah!');
}


/* MENGGUNAKAN STATIC METHOD UNTUK MERUBAH STOK DAN AVAILABILITY
Product.zeroStock().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err)
}); */


/* MERUBAH PRODUCT DENGAN METHOD
changeStock('696b91f7022d5a6d72628caa'); 
*/


/* MENCARI, MENGUPDATE, MENAMPILKAN DATA YANG TERUPDATE, SERTA MENYALAKAN VALIDASI 
Product.findOneAndUpdate({name: 'Sepatu Loafers' }, {
		"name": "Sepatu Loafers",
		"brand": "Gucci",
		"price": 5000000,
		"color": "coklat",
		"size": ["40", "41", "42", "43", "44"],
		"description": "Sepatu loafers dengan desain yang mewah dan elegan, terbuat dari bahan kulit yang berkualitas tinggi.",
		"condition": "baru",
		"stock": 1,
		"availability": {
			"online": true,
			"offline": false
		}
},{ new: true}, { runValidators: true }).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
}); */