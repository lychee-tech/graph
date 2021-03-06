var mongoose = require('mongoose');
mongoose.Promise = global.Promise;



var dbURI = "mongodb://localhost/wlin";
mongoose.connect(dbURI,{useMongoClient:true});


mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});



