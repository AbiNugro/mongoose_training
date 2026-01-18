const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shop_app')
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log(err);
    });

const personSchema = mongoose.Schema({
    firstName: String,
    lastName: String
});


// VIRTUAL PROPERTY MONGOOSE
personSchema.virtual('fullName').get(function() {
    return `${this.firstName} ${this.lastName}`
});

// DIJALANKAN SEBELUM SAVE
personSchema.pre('save', async function() {
    this.firstName = 'Luna'
    this.lastName = 'Maya'
    console.log('Persiapan Menyimpan data');
})

// DIJALANKAN SESUDAH SAVE
personSchema.post('save', async function() {
    console.log('Berhasil Menyimpan Data');
})


const Person = mongoose.model('Person', personSchema);

const person = new Person ({
    firstName: 'Ayu',
    lastName: 'Ting Ting'
});

console.log(person);

person.save().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});