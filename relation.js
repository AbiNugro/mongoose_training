// ONE TO FEW
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relation_db')
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log(err);
    });

const userSchema = new mongoose.Schema({
    name: String,
    // RELASI KE ADDRESS
    address: [{
        _id: false,
        street: String,
        city: String,
        country: String
    }]
})

const User = mongoose.model('User', userSchema);


/* MENYIMPAN DATA PERTAMA
const makeUser = async () => {
    const user = new User({
        name: 'Abi Nugroho'
    })
    user.address.push({
        street: 'Baturaden',
        city: 'Jember',
        country: 'Indonesia'
    })
    const res = await user.save()
    console.log(res)
}

makeUser(); */


/* MENAMBAHKAN ALAMAT BARU PADA DATA PERTAMA
const addAddress = async(id) => {
    const user = await User.findById(id)
    user.address.push({
        street: 'Baron',
        city: 'Nganjuk',
        country: 'Indonesia'
    })
    const res = await user.save()
    console.log(res);
}

addAddress('696c62f2e1d25a2b36355871'); */