const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movie_db')
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log(err);
    });

const movieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    year: Number,
    director: String,
    rating: Number
});

const Movie = mongoose.model('Movie', movieSchema);

/* CARI MOVIE >= 2019
Movie.find({year: {$gte: 2019}}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err)
}); */


/* CARI MOVIE BERDASARKAN ID
Movie.findById('696b416f9875e6f27587a56e').then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e)
}); */


/* INSERT KE DATABASE
Movie.insertMany([
    {
        "title": "Inception",
        "genre": "Sci-Fi",
        "year": 2020,
        "director": 'Christopher Nolan',
        "rating": 8.8
    },
    {
        "title" : "Parasite",
        "genre": "Thriller",
        "year": 2019,
        "director": "Boon Joon-ho",
        "rating" : 8.6
    },
    {
        "title" : "The Dark Knight",
        "genre": "Action",
        "year": 2008,
        "director": "Christopher Nolan",
        "rating" : 9.0
    }
]).then((result) => {
    console.log('it works');
    console.log(result);
}).catch((err) => {
    console.log(err);
}); */


/* UPDATE BANYAK TAHUN > 2019
Movie.updateMany({year: {$gt : 2019}}, {rating: 9}).then((r) => {
    console.log(r);
}).catch((e) => {
    console.log(e);
}); */


/* MENEMUKAN DAN UPDATE BERDASARKAN ID DAN MENAMPILKAN DATA YANG TERUPADTE/TERBARU
Movie.findByIdAndUpdate('696b416f9875e6f27587a570', {rating: 7.5}, {new: true}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
}); */
