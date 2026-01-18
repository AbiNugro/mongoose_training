// ONE TO SQUILLIONS
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relation_db')
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log(err);
    });

const personSchema = new mongoose.Schema({
    username : String,
    age: Number
});

const tweetSchema = new mongoose.Schema({
    name : String,
    likes : Number,
    person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    }
})

const Person = mongoose.model('Person', personSchema)
const Tweet = mongoose.model('Tweet', tweetSchema)


/* MEMASUKKAN DATA AWAL
const makeTweet = async () => {
    const person = new Person({
        username: 'JhonDoe',
        age: 30
    });
    const tweet = new Tweet({
        name: 'Hello',
        likes : 0
    })
    tweet.person = person
    person.save()
    tweet.save()
}

makeTweet() */


/* MENAMBAHKAN DATA TWEET PADA PERSON SAMA
const addTweet = async () => {
    const person = await Person.findOne({
        username: 'JhonDoe'
    })

    const tweet = new Tweet({
        name: 'World War 2',
        likes: 0,
    })
    tweet.person = person
    tweet.save()
}

addTweet(); */


/* MENAMPILKAN DATA PERSON LENGKAP PADA TWEET
const showTweets = async () => {
    const tweets = await Tweet.findById('696cdcefd8852c5ec0e18c12').populate('person')
    console.log(tweets)
}

showTweets() */